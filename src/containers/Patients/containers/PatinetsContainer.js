import React from 'react'
import styled from 'styled-components'
import ACard from '../components/ACardList'
import PatientsList from '../components/PatientsList'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
`

const PatientContainer = () => {
  return (
    <Container>
      <PatientsList />
    </Container>
  )
}

export default PatientContainer
