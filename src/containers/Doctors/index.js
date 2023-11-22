import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layout/HorizontalLayouts'
import Doctors from './containers/DoctorsContainer'
export default () => [
  {
    path: ROUTES.DOCTORS,
    layout: Layouts,
    component: Doctors,
  },
]
