import { wrapper } from '../redux/store'

export const authorize = (title = '') => wrapper.getStaticProps(store => async () => {
    const { auth } = store.getState()
    // response error
    if (!auth.logged) return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }
    // add nextProps
    return { props: { auth, title } }
})

export const guest = (title = '') => wrapper.getStaticProps(store => async () => {
    const { auth } = store.getState()
    // response error
    if (auth.logged) return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }
    // add nextProps
    return { props: { auth, title } }
})