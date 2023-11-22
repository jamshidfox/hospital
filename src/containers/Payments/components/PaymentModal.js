import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from 'reactstrap'
import { DollarSign } from 'react-feather'

const Cards = styled('div')`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
`
const Container = styled('div')`
  font-family: serif;
`
const H5 = styled('h5')`
  margin-left: 0.5rem;
`
const Usullar = styled('a')``
const MBody = styled('div')`
display: flex;
flex-direction: center;
`
const InPut = styled('div')`
  width: 100%;
  border: none;
`
const Image = styled('img')`
  width: 2, 5rem;
  height: 2rem;
  margin-left: 1rem;
`

const Payment = ({ modal, toggle }) => {
  return (
    <Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Payments</ModalHeader>
        <MBody>
          <InPut className="my-2">
            <CardTitle tag="h4">Payment Method</CardTitle>
            <Image src="https://image.shutterstock.com/image-photo/kiev-ukraine-september-30-2017-260nw-740189848.jpg" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png" />
            <CardText>
              <div>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail"></Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="VisaCard Number"
                      type="email"
                    />
                  </FormGroup>
                </Form>
              </div>
            </CardText>
            <CardText>
              <div>
                <Form>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail"></Label>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="BirthDay/Month"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword"></Label>
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder="Year"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </div>
            </CardText>
            <CardText>
              <div>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail"></Label>
                    <Input id="exampleEmail" name="email" placeholder="Card name" type="email" />
                  </FormGroup>
                </Form>
              </div>
            </CardText>
            <Usullar></Usullar>
          </InPut>
        </MBody>
        <ModalFooter>
          <Button color="danger" className="w-100" onClick={toggle}>
            Do Something
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  )
}
export default Payment
