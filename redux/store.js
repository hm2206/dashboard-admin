import { createWrapper } from "next-redux-wrapper"
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import rootReducer from './thunks/rootReducer'
import thunk from "redux-thunk"


const middleware = applyMiddleware(thunk)


const isClient = typeof window !== 'undefined'


const persistConfig = (storage) => ({
    key: 'root',
    version: 1,
    whitelist: ['language'],
    blacklist: [],
    storage,
    stateReconciler: hardSet,
})


const makeStore = () => {
    if (!isClient) {
        return createStore(rootReducer, composeWithDevTools(middleware))
    } else {
        const storage = require('redux-persist/lib/storage').default
        const persistedReducer = persistReducer(persistConfig(storage), rootReducer)
        const store = createStore(persistedReducer, composeWithDevTools(middleware))
        store.__PERSISTOR = persistStore(store)
        return store;
    }
}


export const wrapper = createWrapper(makeStore);