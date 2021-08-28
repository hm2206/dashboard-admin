import { combineReducers } from 'redux';
import { counterReducer } from './counterThunk';
import { screeenReducer } from './screenThunk';
import { languageReducer } from './languageThunk';
import { authReducer } from './authThunk'

const rootReducer = combineReducers({
    counter: counterReducer,
    screen: screeenReducer,
    language: languageReducer,
    auth: authReducer,
});

export default rootReducer;