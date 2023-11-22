import { pick, pipe, equals } from 'ramda'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getDataFromState, getParamsFormHistory } from '../utils/get'
import { DEFAULT_PICK_PARAMS } from '../utils/isEquals'
import toSnakeCase from '../utils/toSnakeCase'
import useCompareEffect from './useCompareEffect'

export const useFetchList = (params) => {
  const { stateName, action, key = 'list' } = params

  const dispatch = useDispatch()

  const data = useSelector((state) => getDataFromState(stateName, state), equals)
  useCompareEffect(() => {
    dispatch(action({}))
  }, [key])

  return data
}
