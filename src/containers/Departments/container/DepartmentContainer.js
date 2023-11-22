import React from 'react'
import styled from 'styled-components'
import DepartmentList from '../components/DepartmentList'
const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
`
const DepartmentContainer = () => {
  return (
    <Container>
      <DepartmentList />
    </Container>
  )
}

export default DepartmentContainer
