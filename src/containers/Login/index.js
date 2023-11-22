import * as ROUTES from '../../constants/routes'
import LoginLayout from '../../components/Layout/LoginLayout'
import LoginContainer from './containers/LoginBaseContainer'
export default () => [
  {
    path: ROUTES.LOGIN,
    layout: LoginLayout,
    component: LoginContainer,
  },
]
