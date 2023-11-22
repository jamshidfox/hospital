import { split, pipe, replace } from 'ramda'
import { useLocation } from 'react-router-dom'

export const getQuery = () => {
  let query = pipe(split('?query='))(useLocation().search)[1]
    .replace(/%20/g, ' ')
    .replace(/  +/g, ' ')

  return query
}

export const getLocation = () => {
  let query = useLocation().pathname + useLocation().search

  return query
}
