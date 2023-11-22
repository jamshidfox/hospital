import React, { useState } from 'react'
import styled from 'styled-components'
import constants from './constants'
import { HelpCircle } from 'react-feather'
import { useNavigate } from 'react-router'
import * as ROUTES from '../../constants/routes'
import { useSelector } from 'react-redux'
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 5px;
`
const Headline = styled('h6')`
  line-height: 20px;
  vertical-align: top;
  color: ${({ theme }) => theme.text.draight};
`
const SideElement = styled('div')`
  display: flex;
  justify-content: start;
  padding: ${({ smart }) => (smart ? '0.7rem 0rem' : '0.7rem 0rem')};
  margin-left: ${({ smart }) => smart && '8px'};
  margin-right: ${({ smart }) => !smart && '3px'};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.draight};
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    color: #336cfb;
    cursor: pointer;
  }
  &.active {
    color: #336cfb;
  }
`
const Text = styled('h6')`
  margin-left: 1rem;
`
const Menu = ({ open }) => {
  const navigate = useNavigate()
  const [element, setElement] = useState()
  const userPermission = useSelector((state) => state.user_info?.data?.permissions)

  const handleSideElement = (e, data) => {
    {
      element ? element.classList.remove('active') : false
    }
    e.currentTarget.classList.add('active')
    setElement(e.currentTarget)
    navigate(data.link)
  }

  return (
    <Container>
      {open && <Headline>MEDICINE</Headline>}
      {constants.map((data, index) =>
        userPermission
          ? userPermission.map((innerData) => {
              if (innerData == data.link.substring(1)) {
                return (
                  <SideElement onClick={(event) => handleSideElement(event, data)} key={data.link}>
                    {data.icon}
                    {open && <Text>{data.name}</Text>}
                  </SideElement>
                )
              }
            })
          : ''
      )}
      <hr></hr>
      <SideElement onClick={(event) => handleSideElement(event, { link: ROUTES.HELP })}>
        <HelpCircle size={17} />
        {open && <Text>Help</Text>}
      </SideElement>
    </Container>
  )
}
export default Menu
