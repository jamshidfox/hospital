import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, { getPayloadFromError, getPayloadFromSuccess } from '../../../utils/axios'
import { setCookie } from '../../../utils/cookie'

export const getAccount = (id, data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(sprintf(API.LOGIN, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.LOGIN,
    })
  }
}

export const loginAction = (data) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .post(API.LOGIN, data)
      .then((response) => {
        const resp = response.data
        const token = resp.token
        setCookie('token', token, 1)
        return resp
      })
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.LOGIN,
    })
  }
}

export const userInfoFetch = (token) => {
  return (dispatch, getState) => {
    const payload = axios({ dispatch, getState })
      .get(`${API.CHECK_TOKEN}${token}`)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.USER_INFO,
    })
  }
}
