import React, { useEffect, useMemo, useState } from 'react';
import SizingTable from '../../tables/sizingTable'
import UserRequest from '../../../request/auth/userRequest';
import { translate } from 'react-switch-lang'
import { setUsers, addUsers, setUser } from '../../../redux/thunks/userThunk'
import { useDispatch, useSelector } from 'react-redux';
import ObjectId from 'bson-objectid'
import { HeaderList } from '../../utils/headers'
import UserEdit from './userEdit'
import { FloatButton } from '../../utils/buttons'
import { Plus } from 'react-feather'
import UserCreate from './userCreate'
import UserItem from './userItem'

const options = {
    CREATE: "CREATE",
    EDIT: "EDIT",
}

const UserList = ({ t }) => {

    // redux
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.user)

    const [current_loading, setCurrentLoading] = useState(true)
    const [query_search, setQuerySearch] = useState("");
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [last_page, setLastPage] = useState(0);
    const [is_error, setIsError] = useState(false)
    const [is_refresh, setIsRefresh] = useState(true);
    const [option, setOption] = useState(options.LIST);

    const userRequest = new UserRequest({ translate: t })

    const canNext = useMemo(() => {
        return (page + 1) <= last_page;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users]);

    const getUsers = async (add = false) => {
        setCurrentLoading(true);
        await userRequest.index({ page, query_search })
        .then(({ data }) => {
            let { meta } = data;
            let result = add ? addUsers : setUsers; 
            dispatch(result(data.data));
            setLastPage(meta.last_page);
            setTotal(meta.total);
            setIsError(false);
        }).catch(() => setIsError(true))
        setCurrentLoading(false)
    }

    const handleQuerySearch = (target) => {
        setQuerySearch(target?.value)
    }

    const handleSearch = () => {
        setPage(1);
        setIsRefresh(true);
    }

    const handleEdit = (user = {}) => {
        setOption(options.EDIT)
        dispatch(setUser(user))
    }

    const toggle = () => {
        setOption("")
    }

    useEffect(() => {
        if (is_refresh) getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_refresh])
    
    useEffect(() => {
        if (is_refresh) setIsRefresh(false);
    }, [is_refresh]);

    useEffect(() => {
        if (page > 1) getPeople(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return (
        <>
            <SizingTable isLoading={current_loading}
                disabled={!canNext}
                isData={users.length}
                title={
                    <HeaderList start={users.length}
                        total={total}
                        disabled={current_loading}
                        querySearch={query_search}
                        onChange={handleQuerySearch}
                        onClick={handleSearch}
                    />
                }
                headers={["#", "Email", "Username", "Acciones"]}
                onDown={() => setPage(prev => prev + 1)}
            >
                {users.map((d, index) => 
                    <UserItem key={`list-item-${new ObjectId().toHexString()}`}
                        onEdit={handleEdit}
                        data={d}
                        index={index}
                    />
                )}
            </SizingTable>
            {/* create person */}
            <FloatButton 
                icon={<Plus/>}
                color="success"
                onClick={() => setOption(options.CREATE)}
            />
            <UserCreate isOpen={option == options.CREATE} 
                toggle={toggle}
            />
            {/* edit */}
            <UserEdit isOpen={option == options.EDIT}
                toggle={toggle}
            />
        </>
    )
}

export default translate(UserList);