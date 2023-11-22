import React from 'react'
import { Button, Form, Input } from 'reactstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCookie, setCookie } from '../../../utils/cookie'
import * as ROUTES from '../../../constants/routes'
import * as API from '../../../constants/api'
import { toast } from 'react-toastify'
import axios from 'axios'
import { getAccount } from '../actions'
const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 1em;
  margin-right: auto;
  margin-top: 100px;
  margin-left: auto;
  border-radius: 0.5em;
  padding: 3em;
  width: 35rem;
  height: 19rem;
  background-color: white;
`
const InputContainer = styled(Input)`
  height: 3rem;
  background-color: #e8f0fe;
`
const LoignBtn = styled(Button)`
  width: 6rem;
  color: white;
  background-color: #3366ff;
`
const admin = {
  username: 'admin',
  password: 'test12345',
}
let isTokenGiven = false

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate()

  return (
    <FormContainer onSubmit={(e) => onLogin(e)}>
      <InputContainer
        type="text"
        name="email"
        id="exampleEmail"
        placeholder="example@example.com"
      />
      <InputContainer type="password" name="password" id="examplePassword" placeholder="********" />
      <LoignBtn>Login</LoignBtn>
    </FormContainer>
  )
}
export default LoginPage
