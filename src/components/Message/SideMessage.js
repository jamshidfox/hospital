import React from 'react'
import { ChevronsRight } from 'react-feather'
import styled from 'styled-components'
import { storageData } from '../../utils/storage'
import ShitImg from '../../images/Izzat.jpg'
import Avatar from 'react-avatar'

const Box = styled('div')`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: calc(100vh);
  max-height: calc(100vh);
  width: ${({ theme, open }) =>
    open ? theme.width.messageMenu.open : theme.width.messageMenu.close};
  min-width: ${({ theme, open }) =>
    open ? theme.width.messageMenu.open : theme.width.messageMenu.close};
  padding: 15px 0;
  overflow: scroll;
  border-radius: ${({ theme }) => theme.borderRadius.straight};
  box-shadow: ${({ theme }) => theme.boxShadow.straight};
  transition: ${({ theme }) => theme.transition.secondary};
  background: ${({ theme }) => theme.background.sideMenu};
  z-index: 12;
`
const FixedButton = styled('div')`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 50%;
  top: 50%;
  left: 0;
  background-color: ${({ theme }) => theme.text.graight};
  width: 20px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`
const Headline = styled('h4')`
  margin: 1rem;
  color: ${({ theme }) => theme.text.graight};
`
const MessageBody = styled('div')``

const ANotificationContainer = styled('div')`
  display: flex;
  padding: 1rem;
`
const MessageContent = styled('div')``
const IMG = styled(Avatar)`
  object-fit: cover;
  margin-right: 0.7rem;
`
const Text = styled('h5')`
  color: ${({ theme }) => theme.text.praight};
`
const P = styled('p')`
  color: ${({ theme }) => theme.text.draight};
`
const Message = (props) => {
  const handleToggleMenu = () => {
    const value = !open

    setOpen(value)
    storageData('isMessageOpen').setValue(value)
  }
  const arr = [1]
  const { open, setOpen } = props
  return (
    <Box open={open}>
      <Headline>Notifications</Headline>
      <MessageBody>
        {arr.map((d, index) => (
          <ANotificationContainer key={index}>
            <IMG src={ShitImg} round={true} size={45} />
            <MessageContent>
              <Text>Anna Srzand joined to JAIR</Text>
              <P>2h ago + social media</P>
            </MessageContent>
          </ANotificationContainer>
        ))}
      </MessageBody>
      <FixedButton onClick={handleToggleMenu}>
        <ChevronsRight width={50} height={60} viewBox={'0 0 22 22'} strokeWidth={3} />
      </FixedButton>
    </Box>
  )
}
export default Message
