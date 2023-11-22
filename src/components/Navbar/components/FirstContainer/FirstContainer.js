import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  display: flex;
  height: auto;
  width: 20%;
  color: ${({ theme }) => theme.text.graight};
`
const Timer = styled('h3')`
  display: flex;
`

const FirstContainer = () => {
  const [date, setDate] = useState(new Date())
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const addZero = (n) => (n < 10 ? `0${n}` : n)

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <Container>
      <Timer>{`${addZero(hour)} : ${addZero(minutes)} : ${addZero(seconds)}`}</Timer>
    </Container>
  )
}
export default FirstContainer
