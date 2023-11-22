import React from 'react'
import styled from 'styled-components'
import Table from './AppointmentTable'

const Container = styled('div')``
const AppointmentTable = ({ list }) => {
  return (
    <Container>
      <Table list={list} />
    </Container>
  )
}

export default AppointmentTable
