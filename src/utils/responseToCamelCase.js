import { includes, is, path } from 'ramda'
import toCamelCase from './toCamelCase'

const CONTENT_TYPE_JSON = 'application/json'

export default (data, response) => {
  const responseContentType = path(['content-type'], response)
  if (responseContentType && includes(CONTENT_TYPE_JSON, responseContentType)) {
    return toCamelCase(JSON.parse(data))
  }

  if (is(Object, data) || is(Array, data)) {
    return toCamelCase(data)
  }

  return data
}
