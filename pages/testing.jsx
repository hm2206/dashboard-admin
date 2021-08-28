import React from 'react'
import { wrapper } from '../redux/store'
import { useSelector , useStore} from 'react-redux'
import { incrementCounter } from '../redux/thunks/counterThunk'

const TestingPage = ({ newCounter }) => {

    // const counter = useSelector(state => state?.counter?.value);
    const counter = useStore().getState()

    return (
        <div className="">{JSON.stringify(counter)}, {newCounter}</div>
    )
}

export const getStaticProps = wrapper.getStaticProps(store => () => {
    store.dispatch(incrementCounter())
    const newCounter = store.getState().counter.value;
    return { props: { newCounter } } 
});


export default TestingPage