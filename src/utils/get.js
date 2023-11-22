import { curry, path, pathOr, compose } from 'ramda'
import { parseParams } from './url'

export const getDataFromState = curry((name, state) => ({
  loading: path([name, 'loading'], state),
  failed: path([name, 'failed'], state),
  data: path([name, 'data'], state),
  results: pathOr([], [name, 'data', 'results'], state),
}))

export const getParamsFormHistory = compose(parseParams, path(['location', 'search']))
