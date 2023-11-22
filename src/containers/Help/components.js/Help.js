import styled from 'styled-components'
import { HelpCircle } from 'react-feather'
import React, { useState } from 'react'
import NoHelp from './NoHelp'
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
  display: flex;
  align-items: center;
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
function HelpCenter() {
  const [modal, setModal] = useState(false)
  const [unmountOnClose, setUnmountOnClose] = useState(true)

  const toggle = () => setModal(!modal)
  const changeUnmountOnClose = (e) => {
    let { value } = e.target
    setUnmountOnClose(JSON.parse(value))
  }

  return (
    <Container>
      <HelpCard>
        <Nav>
          <h1>HELP</h1>
          <Line />
        </Nav>
        <Body>
          <div>
            <h1>Do you need any help?</h1>
          </div>
        </Body>
        <PeredFooter>
          <Icon size={200} />
        </PeredFooter>
        <Footer>
          <Form inline onSubmit={(e) => e.preventDefault()}>
            <YesNoButton color="success" size="lg">
              YES
            </YesNoButton>
            <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose} right={true}>
              <ModalHeader toggle={toggle}>What kind of help do you need?</ModalHeader>
              <ModalBody>
                <Input
                  type="textarea"
                  placeholder="Ask us about specific help and we will try to answer you)"
                  rows={5}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Send
                </Button>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </Form>
          <NoHelp />
        </Footer>
        <PadFooter>
          <h3>If you need help, feel free to ask</h3>
        </PadFooter>
      </HelpCard>
    </Container>
  )
}
export default HelpCenter
