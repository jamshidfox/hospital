import React from 'react'
import styled from 'styled-components'
import NoTasks from '../../images/NoTasks.png'

const Wrapper = styled.div`
  background-image: url('${NoTasks}');
  padding: 200px 0 10px;
  background-repeat: no-repeat;
  background-position: top;
  text-align: center;
  width: 100%;
`
const EmptyQuery = (props) => {
  const { text } = props
  return <Wrapper>{text}</Wrapper>
}

export default EmptyQuery
