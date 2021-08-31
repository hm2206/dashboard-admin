import { createWrapper } from "next-redux-wrapper"
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import rootReducer from './thunks/rootReducer'
import thunk from "redux-thunk"
import logger from "redux-logger"


const middleware = applyMiddleware(thunk)


const persistConfig = {
    key: 'root',
    version: 1,
    whitelist: ['language'],
    blacklist: [],
    storage,
    stateReconciler: hardSet,
}


const makeStore = ({ req }) => {
    let isServer = Object.keys(req || {}).length ? true : false
    if (isServer) {
        return createStore(rootReducer, composeWithDevTools(middleware))
    } else {
        const persistedReducer = persistReducer(persistConfig, rootReducer)
        const store = createStore(persistedReducer, composeWithDevTools(middleware))
        store.__PERSISTOR = persistStore(store)
        return store;
    }
}


export const wrapper = createWrapper(makeStore);