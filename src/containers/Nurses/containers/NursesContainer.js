import React from 'react'
import styled from 'styled-components'
// import Components
import Nurses from '../components/NursesTable'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
`

const NursesContainer = () => {
  return (
    <Container>
      <Nurses />
    </Container>
  )
}

export default NursesContainer
