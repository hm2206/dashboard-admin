import { combineReducers } from 'redux';
import { screeenReducer } from './screenThunk';
import { languageReducer } from './languageThunk';
import { authReducer } from './authThunk'
import { peopleReducer } from './peopleThunk'
import { userReducer } from './userThunk'
import { roleReducer } from './roleThunk';
import { productReducer } from './productThunk'

const rootReducer = combineReducers({
    screen: screeenReducer,
    language: languageReducer,
    auth: authReducer,
    people: peopleReducer,
    user: userReducer,
    role: roleReducer,
    product: productReducer,
});

export default rootReducer;