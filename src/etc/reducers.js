import { combineReducers } from 'redux'
import { compose, forEach, toPairs } from 'ramda'
import * as actionTypes from '../constants/actionTypes'
import * as STATE from '../constants/stateNames'
import createThunkReducer from '../utils/createThunkReducer'
import confirmDialogReducer from '../components/ConfirmDialog/reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    confirmDialog: confirmDialogReducer,
    [STATE.LOGIN]: createThunkReducer(actionTypes.LOGIN),
    [STATE.USER_INFO]: createThunkReducer(actionTypes.USER_INFO),
    [STATE.ALL_DOCTORS]: createThunkReducer(actionTypes.GET_ALL_DOCTORS),
    [STATE.ALL_APPOINTMENTS]: createThunkReducer(actionTypes.GET_ALL_APPOINTMENTS),
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export const injectReducers = (store, reducers) =>
  compose(
    forEach(([key, reducer]) => injectReducer(store, { key, reducer })),
    toPairs
  )(reducers)
