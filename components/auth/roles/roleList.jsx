import React, { useEffect, useMemo, useState } from 'react';
import SizingTable from '../../tables/sizingTable'
import RoleRequest from '../../../request/auth/roleRequest';
import { translate } from 'react-switch-lang'
import { setRoles, addRoles, setRole } from '../../../redux/thunks/roleThunk'
import { useDispatch, useSelector } from 'react-redux';
import ObjectId from 'bson-objectid'
import { HeaderList } from '../../utils/headers'
import RoleEdit from './roleEdit'
import { FloatButton } from '../../utils/buttons'
import { Plus } from 'react-feather'
import RoleCreate from './roleCreate'
import RoleItem from './roleItem'
import RoleListMethods from './roleListMethods';

const options = {
    CREATE: "CREATE",
    EDIT: "EDIT",
    METHODS: "METHODS"
}

const RoleList = ({ t }) => {

    // redux
    const dispatch = useDispatch();
    const { roles } = useSelector(state => state.role)

    const [current_loading, setCurrentLoading] = useState(true)
    const [query_search, setQuerySearch] = useState("");
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [last_page, setLastPage] = useState(0);
    const [is_error, setIsError] = useState(false)
    const [is_refresh, setIsRefresh] = useState(true);
    const [option, setOption] = useState(options.LIST);

    const roleRequest = new RoleRequest({ translate: t })

    const canNext = useMemo(() => {
        return (page + 1) <= last_page;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roles]);

    const getRoles = async (add = false) => {
        setCurrentLoading(true);
        await roleRequest.index({ page, query_search })
        .then(({ data }) => {
            let { meta } = data;
            let result = add ? addRoles : setRoles; 
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

    const handleEdit = (role = {}) => {
        setOption(options.EDIT)
        dispatch(setRole(role))
    }

    const handleSetting = (role = {}) => {
        setOption(options.METHODS)
        dispatch(setRole(role));
    }

    const toggle = () => {
        setOption("")
    }

    useEffect(() => {
        if (is_refresh) getRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_refresh])
    
    useEffect(() => {
        if (is_refresh) setIsRefresh(false);
    }, [is_refresh]);

    useEffect(() => {
        if (page > 1) getRoles(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    // vaciar role
    useEffect(() => {
        if (!option) dispatch(setRole({}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [option])

    return (
        <>
            <SizingTable isLoading={current_loading}
                disabled={!canNext}
                isData={roles.length}
                title={
                    <HeaderList start={roles.length}
                        total={total}
                        disabled={current_loading}
                        querySearch={query_search}
                        onChange={handleQuerySearch}
                        onClick={handleSearch}
                    />
                }
                headers={["#", "Nombre", "Descripción", "Acciones"]}
                onDown={() => setPage(prev => prev + 1)}
            >
                {roles.map((d, index) => 
                    <RoleItem key={`list-item-${new ObjectId().toHexString()}`}
                        onEdit={handleEdit}
                        onSetting={handleSetting}
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
            <RoleCreate isOpen={option == options.CREATE} 
                toggle={toggle}
            />
            {/* edit */}
            <RoleEdit isOpen={option == options.EDIT}
                toggle={toggle}
            />
            {/* setting */}
            <RoleListMethods isOpen={option == options.METHODS}
                toggle={toggle}
            />
        </>
    )
}

export default translate(RoleList);