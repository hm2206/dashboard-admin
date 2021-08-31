import { wrapper } from '../redux/store'
import nookies from 'nookies'
import { setLogged } from '../redux/thunks/authThunk'

export const authorize = wrapper.getServerSideProps(store => async (ctx) => {
    const { auth_token } = nookies.get(ctx);
    const isLogged = auth_token ? true : false;
    store.dispatch(setLogged(isLogged));
    const { auth } = store.getState()
    // response error
    if (!auth.logged) return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }
    // add nextProps
    return { props: { auth } }
})

export const guest = wrapper.getServerSideProps(store => async (ctx) => {
    const { auth_token } = nookies.get(ctx);
    const isLogged = auth_token ? true : false;
    store.dispatch(setLogged(isLogged));
    const { auth } = store.getState()
    // response error
    if (auth.logged) return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }
    // add nextProps
    return { props: { auth } }
})