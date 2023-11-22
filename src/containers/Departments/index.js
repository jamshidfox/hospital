import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layout/HorizontalLayouts'
import DepartmentContainer from './container/DepartmentContainer'
export default () => [
  {
    path: ROUTES.DEPARTMENT,
    layout: Layouts,
    component: DepartmentContainer,
  },
]
