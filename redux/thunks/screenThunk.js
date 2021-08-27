// Action types
export const RESIZE_SCREEN = 'RESIZE_SCREEN';
export const WRAPPER_SCREEN = 'WRAPPER_SCREEN';
export const TOGGLE_THEME = 'TOGGLE_THEME';


// Action creator
export const resizeScreen = () => ({
    type: RESIZE_SCREEN
})

export const wrapperScreen = () => ({
    type: WRAPPER_SCREEN
})

export const toggleTheme = () => ({
    type: TOGGLE_THEME
})


// Estado inicial
export const stateInitial = {
    width: 0,
    height: 0,
    wrapper: false,
    dark: false,
}

// configs
const limit = 1350;

// Reducer
export const screeenReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case RESIZE_SCREEN:
            state.width = window.innerWidth
            state.height = window.innerHeight
            if (limit >= state.width) state.wrapper = true;
            else state.wrapper = false;
            return state;
        case WRAPPER_SCREEN:
            state.wrapper = !state.wrapper;
            return state;
        case TOGGLE_THEME:
            state.dark = !state.dark;
            document.body.className = state.dark ? 'dark-only' : 'light'
            return state;
        default:
            return state;
    }
}