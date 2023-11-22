import styled from 'styled-components'
import { HelpCircle } from 'react-feather'
import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from 'reactstrap'

const Container = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
`
const HelpCard = styled('div')`
  padding: 3rem;
  border-radius: 30px;
  justify-content: center;
  background-color: white;
  width: 40rem;
  height: 50rem;
`
const Line = styled('div')`
  background-color: black;
  width: 100%;
  height: 3px;
`

const Nav = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Body = styled('div')`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`
const Icon = styled(HelpCircle)``

const PeredFooter = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`
const Footer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
`
const YesNoButton = styled(Button)`
  width: 15rem;
  height: 5rem;
  border-radius: 3rem;
`
const PadFooter = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`
function NoHelp(props) {
  const [modal, setModal] = useState(false)
  const [unmountOnClose, setUnmountOnClose] = useState(true)

  const toggle = () => setModal(!modal)
  const changeUnmountOnClose = (e) => {
    let { value } = e.target
    setUnmountOnClose(JSON.parse(value))
  }

  return (
    <div>
      <YesNoButton color="danger" size="lg" onClick={toggle} outline>
        NO
      </YesNoButton>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>If you don't need help,</ModalHeader>
        <ModalBody>
          You can subscribe to our social networks to stay informed) Our Telegram channel is
          https://t.me/Jair_MainMed Our Instagram channel -
          https://instagram.com/jair.main_medicine?igshid=YmMyMTA2M2Y= Our Facebook channel -
          https://www.facebook.com/profile.php?id=100086185323874
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
export default NoHelp
