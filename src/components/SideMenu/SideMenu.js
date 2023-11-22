import React from 'react'
import styled from 'styled-components'
import { storageData } from '../../utils/storage'
import { Menu as MenuIcon } from 'react-feather'
import Menu from './Menu'
import Menu2 from './Menu2'
import constants from './constants'
import { useNavigate } from 'react-router'
import { LogOut } from 'react-feather'
const Box = styled('div')`
  position: sticky;
  top: 0px;
  left: 0px;
  bottom: 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: calc(100vh);
  max-height: calc(100vh);
  width: ${({ theme, open }) => (open ? theme.width.sideMenu.open : theme.width.sideMenu.close)};
  min-width: ${({ theme, open }) =>
    open ? theme.width.sideMenu.open : theme.width.sideMenu.close};
  padding: 15px 0;
  background: ${({ theme }) => theme.background.sideMenu};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.straight};
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  transition: ${({ theme }) => theme.transition.primary};
`
const IconButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.primary};
  &:active {
    opacity: 0.7;
    transition: ${({ theme }) => theme.transition.primary};
  }
`
const MenuWrapper = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text.straight};
`
const MenuButton = styled(IconButton)`
  padding: ${({ smart }) => (smart ? '7px 4px' : '7px 16px')};
  margin-left: ${({ smart }) => smart && '8px'};
  margin-right: ${({ smart }) => !smart && '3px'};

  & > svg {
    width: 35px;
    height: 35px;
  }
`
const Title = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  letter-spacing: 0.5px;
  margin-right: 5px;
  user-select: none;
  & > * {
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h2 {
    font-size: ${({ withSubtitle }) => (withSubtitle ? '14px' : '18px')};
    line-height: ${({ withSubtitle }) => (withSubtitle ? '16px' : '20px')};
    font-weight: 600;
    color: ${({ theme }) => theme.text.straight};
  }
  h3 {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text.secondary};
  }
`
const MenuList = styled('div')`
  max-height: calc(100vh - 30px - 79px - 82px);
  overflow-y: scroll;
  transition: ${({ theme }) => theme.transition.primary};
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  &:hover {
    transition: ${({ theme }) => theme.transition.primary};
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.background.thumb};
    }
  }
`
const LogoutContainer = styled('div')`
  display: flex;
  justify-content: start;
  padding: ${({ smart }) => (smart ? '0.7rem 0rem' : '0.7rem 0rem')};
  margin-left: ${({ smart }) => smart && '8px'};
  margin-right: ${({ smart }) => !smart && '3px'};
  margin-bottom: 1rem;
  padding: 0rem 0.5rem;
  color: #52575c;
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
const Text = styled('h5')`
  margin-left: 1rem;
  opacity: 0.7;
`

const SideMenu = (props) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/login')
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  }
  const handleToggleMenu = () => {
    const value = !open

    setOpen(value)
    storageData('isOpenMenu').setValue(value)
  }
  const fullName = 'JAIR'
  const email = 'jamanu1910077@gmail.com'
  const username = 'Main-Medicine in Uzbekistan'
  const { open, setOpen } = props
  return (
    <Box open={open}>
      <div>
        <MenuWrapper>
          <MenuButton onClick={handleToggleMenu} smart={!open}>
            <MenuIcon style={{ verticalAlign: 'text-bottom' }} />
          </MenuButton>
          {open && (
            <Title withSubtitle={!!email}>
              <h2>{fullName}</h2>
              {username && <h3>{username}</h3>}
            </Title>
          )}
        </MenuWrapper>
        <MenuList>
          {/* <Menu list={constants} open={open} /> */}
          <Menu2 open={open} />
        </MenuList>
      </div>
      <LogoutContainer onClick={handleLogout}>
        <LogOut size={17} />
        {open && <Text>Log Out</Text>}
      </LogoutContainer>
    </Box>
  )
}
export default SideMenu
