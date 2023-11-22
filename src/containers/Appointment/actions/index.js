import { sprintf } from 'sprintf-js'
import * as actionTypes from '../../../constants/actionTypes'
import * as API from '../../../constants/api'
import axios, { getPayloadFromError, getPayloadFromSuccess } from '../../../utils/axios'
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDExOWVkOTgyYjZkZmI0OWJlMTE4NGYiLCJlbWFpbCI6ImphbXNoaWRiZWtrb2JpbG92MjAwMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwNCRCb3dJQlBRVTl5cmpWVWR5NmVBQW9lYU94NkJVQWNEYUhkSHZCeUZMZko4VGZMTkxueXN4bSIsIm5hbWUiOiJKYW1zaGlkYmVrIiwic3VybmFtZSI6IktvYmlsb3YiLCJhdmF0YXIiOiJodHRwczovL2J1Y2tldDg0MTIzNC5zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9DYXQwMy5qcGciLCJpYXQiOjE2Nzk2MzcyNzcsImV4cCI6MTY3OTcyMzY3N30.hrOtmr2X5WrNNAtpaVrmw04mnLObWMI6hIuvfLO9E0c`
export const getAllAppointments = (id, data) => {
  return () => {
    return (dispatch, getState) => {
      const payload = axios({ dispatch, getState })
        .get(sprintf(API.APPOINTMENTS, id), data)
        .then(getPayloadFromSuccess)
        .catch((d) => console.log(d))

      return dispatch({
        payload,
        type: actionTypes.GET_ALL_APPOINTMENTS,
      })
    }
  }
}
