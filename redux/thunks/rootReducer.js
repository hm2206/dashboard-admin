import { combineReducers } from 'redux';
import { screeenReducer } from './screenThunk';
import { languageReducer } from './languageThunk';
import { authReducer } from './authThunk'

const rootReducer = combineReducers({
    screen: screeenReducer,
    language: languageReducer,
    auth: authReducer,
});

export default rootReducer;