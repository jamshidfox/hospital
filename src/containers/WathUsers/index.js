import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layout/HorizontalLayouts'
import Appointments from './containers/Appointments'
export default () => [
  {
    path: ROUTES.WATH_USERS,
    layout: Layouts,
    component: Appointments,
  },
]
