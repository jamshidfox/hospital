import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layout/HorizontalLayouts'
import PaymentMainContainer from './containers/PaymentContainer'
export default () => [
  {
    path: ROUTES.PAYMENTS,
    layout: Layouts,
    component: PaymentMainContainer,
  },
]
