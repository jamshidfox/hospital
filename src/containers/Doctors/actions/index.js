import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, { getPayloadFromError, getPayloadFromSuccess } from '../../../utils/axios'

export const getAllDoctors = (id, data) => {
  return () => {
    return (dispatch, getState) => {
      const payload = axios({ dispatch, getState })
        .get(sprintf(API.DOCTORS, id), data)
        .then(getPayloadFromSuccess)
        .catch((d) => console.log(d))

      return dispatch({
        payload,
        type: actionTypes.GET_ALL_DOCTORS,
      })
    }
  }
}
