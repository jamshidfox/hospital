import styled from 'styled-components'
import FinalForm from '../components/LoginFields'
import * as STATE from '../../../constants/stateNames'
import { toast } from 'react-toastify'
import * as ROUTES from '../../../constants/routes'
import { getAccount, loginAction, userInfoFetch } from '../actions/index'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Bars } from 'react-loader-spinner'
import { useState } from 'react'

const Text = styled('h1')`
  color: white;
  text-align: center;
`
const LoginContainer = styled('div')``

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [load, setLoad] = useState(false)

  const onLogin = (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value
    return dispatch(loginAction({ email, password }))
      .then(async ({ value }) => {
        setLoad(true)
        dispatch(userInfoFetch(value.token))
        navigate(ROUTES.DASHBOARD)
        toast.success('Successefully loged in!!!')
      })
      .catch((err) => toast.error(err.message), setLoad(true))
  }
  return (
    <LoginContainer>
      <Text>Welcome to JAIR</Text>
      <Bars
        height="60"
        width="1000"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={load}
      />
      <FinalForm onLogin={onLogin} />
    </LoginContainer>
  )
}
export default LoginPage
