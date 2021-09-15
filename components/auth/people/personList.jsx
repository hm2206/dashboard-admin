import React, { useEffect, useMemo, useState } from 'react';
import SizingTable from '../../tables/sizingTable'
import PeopleRequest from '../../../request/auth/peopleRequest';
import { translate } from 'react-switch-lang'
import { setPeople, addPeople, setPerson } from '../../../redux/thunks/peopleThunk'
import { useDispatch, useSelector } from 'react-redux';
import ObjectId from 'bson-objectid'
import { HeaderList } from '../../utils/headers'
import PersonEdit from './personEdit'
import { FloatButton } from '../../utils/buttons'
import { Plus } from 'react-feather'
import PersonCreate from './personCreate'
import PersonItem from './personItem'

const options = {
    CREATE: "CREATE",
    EDIT: "EDIT",
}

const PersonList = ({ t }) => {

    // redux
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.people)

    const [current_loading, setCurrentLoading] = useState(true)
    const [query_search, setQuerySearch] = useState("");
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [last_page, setLastPage] = useState(0);
    const [is_error, setIsError] = useState(false)
    const [is_refresh, setIsRefresh] = useState(true);
    const [option, setOption] = useState(options.LIST);

    const peopleRequest = new PeopleRequest({ translate: t })

    const canNext = useMemo(() => {
        return (page + 1) <= last_page;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const getPeople = async (add = false) => {
        setCurrentLoading(true);
        await peopleRequest.index({ page, query_search })
        .then(({ data }) => {
            let { meta } = data;
            let result = add ? addPeople : setPeople; 
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

    const handleEdit = (person = {}) => {
        setOption(options.EDIT)
        dispatch(setPerson(person))
    }

    const toggle = () => {
        setOption("")
    }

    useEffect(() => {
        if (is_refresh) getPeople();
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
                isData={data.length}
                title={
                    <HeaderList start={data.length}
                        total={total}
                        disabled={current_loading}
                        querySearch={query_search}
                        onChange={handleQuerySearch}
                        onClick={handleSearch}
                    />
                }
                headers={["#", "Apellidos y Nombres", "Documento", "Edad", "Sexo", "Fecha de Nacimiento", "Acciones"]}
                onDown={() => setPage(prev => prev + 1)}
            >
                {data.map((d, index) => 
                    <PersonItem key={`list-item-${new ObjectId().toHexString()}`}
                        onEdit={handleEdit}
                        person={d}
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
            <PersonCreate isOpen={option == options.CREATE} 
                toggle={toggle}
            />
            {/* edit */}
            <PersonEdit isOpen={option == options.EDIT}
                toggle={toggle}
            />
        </>
    )
}

export default translate(PersonList);