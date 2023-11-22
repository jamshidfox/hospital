import { fromPairs, toPairs, map, compose } from 'ramda'

export const toSnake = (str) => {
  return str.replace(/\./g, '__').replace(/([A-Z])/g, ($1) => '_' + $1.toLowerCase())
}

const firstIndexToSnakeCase = map((item) => [[toSnake(item[0])], item[1]])

export default compose(fromPairs, firstIndexToSnakeCase, toPairs)
