import { wrapper } from '../redux/store'
import nookies from 'nookies'
import { setLogged, setUser } from '../redux/thunks/authThunk'
import AuthRequest from '../request/auth/authRequest'

export const authorize = wrapper.getServerSideProps(store => async (ctx) => {
    const { auth_token } = nookies.get(ctx);
    const isLogged = auth_token ? true : false;

    store.dispatch(setLogged(isLogged));

    const authRequest = new AuthRequest({ ctx })

    await authRequest.me()
    .then(res => store.dispatch(setUser(res.data)))
    .catch(() =>  store.dispatch(setLogged(false)))

    const { auth } = store.getState()

    // response error
    if (!auth.logged) {

        nookies.destroy(ctx, 'auth_token')

        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    } 

    // add nextProps
    return { props: { user: auth.user } }
})


export const guest = wrapper.getServerSideProps(store => async (ctx) => {
    const { auth_token } = nookies.get(ctx);
    const isLogged = auth_token ? true : false;

    store.dispatch(setLogged(isLogged));

    const { auth } = store.getState()

    // response error
    if (auth.logged) {

        store.dispatch(setUser({}))

        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    // add nextProps
    return { props: { user: auth.user } }
})