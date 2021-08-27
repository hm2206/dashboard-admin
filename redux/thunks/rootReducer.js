import { combineReducers } from 'redux';
import { counterReducer } from './counterThunk';
import { screeenReducer } from './screenThunk';

const rootReducer = combineReducers({
    counter: counterReducer,
    screen: screeenReducer,
});

export default rootReducer;