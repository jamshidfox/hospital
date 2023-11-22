import React, { useState } from 'react'
import styled from 'styled-components'
import { storageData } from '../../utils/storage'
// import contents
import SideBar from '../SideMenu/SideMenu'
import Nav from '../Navbar'

const SideMenu = styled(SideBar)`
  position: sticky;
  top: 0;
  left: 0;
  width: 30%;
`

const Container = styled('div')`
  display: flex;
  flex-direction: row;
`

const BodyContent = styled('div')`
  display: flex;
  min-height: 60vh;
  margin-top: 3rem;
  padding: 0rem 2rem;
  width: 100%;
`

const Section = styled('div')`
  display: flex;
  width: 70%;
  flex-flow: column nowrap;
  flex-grow: 1;
  max-width: calc(
    100vw -
      (${({ theme, open }) => (open ? theme.width.sideMenu.open : theme.width.sideMenu.close)})
  );
  transition: ${({ theme }) => theme.transition.primary};
`
const Navbar = styled(Nav)``

const BaseLayout = (props) => {
  const isOpenMenuStorage = storageData('isOpenMenu').getValue()
  const isMsgOpen = storageData('isMessageOpen').getValue()
  const isOpenMenuInitial = isOpenMenuStorage === null || isOpenMenuStorage === true
  const [isOpenMenu, setIsOpenMenu] = useState(isOpenMenuInitial)
  const [isMessageOpen, setIsMessageOpen] = useState(false)
  const { children } = props
  return (
    <Container>
      <SideMenu open={isOpenMenu} setOpen={setIsOpenMenu} />
      <Section>
        <Navbar open={isMessageOpen} setOpen={setIsMessageOpen} />
        <BodyContent>{children}</BodyContent>
      </Section>
    </Container>
  )
}
export default BaseLayout
