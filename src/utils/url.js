import { pipe, split, map, fromPairs } from 'ramda'

const parseParams = (url) => {
  const [, search] = split('?', url)
  const searchToObject = pipe(split('&'), map(split('=')), fromPairs)
  return search ? searchToObject(search) : {}
}

export { parseParams }
