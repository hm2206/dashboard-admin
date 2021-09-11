import { combineReducers } from 'redux';
import { screeenReducer } from './screenThunk';
import { languageReducer } from './languageThunk';
import { authReducer } from './authThunk'
import { peopleReducer } from './peopleThunk'

const rootReducer = combineReducers({
    screen: screeenReducer,
    language: languageReducer,
    auth: authReducer,
    people: peopleReducer,
});

export default rootReducer;