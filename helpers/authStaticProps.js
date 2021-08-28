import { wrapper } from '../redux/store'

export const authorize = wrapper.getStaticProps(store => async () => {
    const { auth } = store.getState()
    // response error
    if (!auth.logged) return {
        redirect: {
            destination: '/login',
            permanent: false
        }
    }
    // add nextProps
    return { props: auth }
})

export const guest = wrapper.getStaticProps(store => async () => {
    const { auth } = store.getState()
    // response error
    if (auth.logged) return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }
    // add nextProps
    return { props: auth }
})