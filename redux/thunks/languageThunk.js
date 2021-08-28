import {
    setTranslations,
    setLanguage,
} from 'react-switch-lang';
import { langs } from '../../data/lang'

// Action types
export const CHANGE_LANG = "CHANGE_LANG";
export const DEFAULT_LANG = "DEFAULT_LANG";


// Actions creator
export const changelang = (key) => ({
    type: CHANGE_LANG,
    payload: key
})

export const defaultLang = () => ({
    type: DEFAULT_LANG
})

// Estado initial
export const stateInitial = {
    lang: 'en'
}


// reducers
export const languageReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case DEFAULT_LANG:
            setTranslations(langs)
            setLanguage(state.lang)
            return state;
        case CHANGE_LANG:
            state.lang = action.payload || state.lang
            setLanguage(state.lang)
            return state;
        default:
            return state;
    }
};