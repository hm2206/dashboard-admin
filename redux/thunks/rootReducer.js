import { combineReducers } from 'redux';
import { counterReducer } from './counterThunk';
import { screeenReducer } from './screenThunk';
import { languageReducer } from './languageThunk'

const rootReducer = combineReducers({
    counter: counterReducer,
    screen: screeenReducer,
    language: languageReducer,
});

export default rootReducer;