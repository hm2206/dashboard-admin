
// Action types
export const SET_LOGGED = 'SET_LOGGED'
export const SET_TOKEN = 'SET_TOKEN'
export const SET_USER = 'SET_USER'


// Actions creator
export const setLogged = (logged = false) => ({
    type: SET_LOGGED,
    payload: logged ? true : false
})

export const setToken = (newToken = null) => ({
    type: SET_TOKEN,
    payload: newToken
})

export const setUser = (newUser = {}) => ({
    type: SET_USER,
    payload: newUser || {}
})

// Estado initial
export const stateInitial = {
    logged: false,
    token: null,
    user: {}
}


// reducers
export const authReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case SET_LOGGED:
            state.logged = action.payload
            return state;
        case SET_TOKEN:
            state.token = action.payload
            return state;
        case SET_USER:
            state.user = action.payload
            return state; 
        default:
            return state;
    }
};