import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { makeRootReducer } from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as STATE from '../constants/stateNames'

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, promise]

  // ======================================================
  // Browser console logger
  // ======================================================
  if (process.env.NODE_ENV === 'development') {
    const logger = require('redux-logger')
    middleware.push(logger.createLogger({ collapsed: true }))
  }

  // ====================Persist-Redux===========================
  const whiteList = () => {
    const arr = []
    for (let x in STATE) {
      arr.push(x.toLocaleLowerCase())
    }
    return arr
  }
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: whiteList(), // specify which parts of state to persist
  }
  const persistedReducer = persistReducer(persistConfig, makeRootReducer())

  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(persistedReducer, initialState, applyMiddleware(...middleware))
  let persistor = persistStore(store)

  store.asyncReducers = {}

  return { store, persistor }
}
