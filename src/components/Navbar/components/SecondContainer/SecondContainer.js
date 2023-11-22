import styled from 'styled-components'
import { Moon } from 'react-feather'
import Avatar from 'react-avatar'
import { storageData } from '../../../../utils/storage'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Theme } from '../../../../App'
import Language from '../../../Languages/Language'

const Contianer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 45%;
`
const NotificationContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-top: 0.3rem;
  height: 100%;
  & :hover {
    cursor: pointer;
  }
  > * {
    width: 2rem;
    height: 2rem;
  }
  color: ${({ theme }) => theme.text.draight};
`
const AvatarContainer = styled('div')`
  position: flex;
  & :hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.straight};
  }
  > * {
    width: 10px;
    height: 10px;
  }
`
const ThemeContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 0.7rem;
  height: 100%;
  & :hover {
    cursor: pointer;
  }
  > * {
    width: 2rem;
    height: 2rem;
  }
  color: ${({ theme }) => theme.text.draight};
`
const LanguageContainer = styled('div')`
  margin-right: 0.7rem;
`

const UserName = styled('h5')`
  color: ${({ theme }) => theme.text.straight};
  font-size: 16px;
  margin: 0 1rem 0 0;
  cursor: default;
`

const SecondContainer = (props) => {
  const { open, setOpen } = props
  const { theme, setTheme } = useContext(Theme)
  const userInfo = useSelector((state) => state.user_info.data)
  const handleToggleTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark')
  }

  const handleToggleMsg = () => {
    const value = !open

    setOpen(value)
    storageData('isMessageOpen').setValue(value)
  }
  return (
    <Contianer>
      <LanguageContainer>
        <Language />
      </LanguageContainer>
      <ThemeContainer onClick={handleToggleTheme}>
        <Moon />
      </ThemeContainer>
      {/* <NotificationContainer className="" onClick={handleToggleMsg}>
        <Bell />
        <span className="mb-2">
          <Badge className="bg-warning">4</Badge>
        </span>
      </NotificationContainer> */}
      <UserName>{`${userInfo?.name} ${userInfo?.surname}`}</UserName>
      <AvatarContainer>
        <Avatar src={userInfo?.avatar} size={45} round={true} />
      </AvatarContainer>
    </Contianer>
  )
}

export default SecondContainer
