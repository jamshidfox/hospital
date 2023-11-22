import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  background: #222b45;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginLayout = (props) => {
  const { children } = props
  return <Container>{children}</Container>
}
export default LoginLayout
