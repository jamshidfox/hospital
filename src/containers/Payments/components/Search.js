import React from 'react'
import {Card, Label, Input, FormGroup, } from 'reactstrap'

import styled from 'styled-components'
const Container = styled('div')`
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  background-color: #ffff;
  margin-top: 2rem;
  width: 25rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`
const SearchContainer = () => {
  return(
    <Container>
    <Input
      id="exampleSearch"
      name="search"
      placeholder="search placeholder"
      type="search"
    />
  </Container>
  )
}

export default SearchContainer
