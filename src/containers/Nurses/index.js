import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layout/HorizontalLayouts'
import Nurses from './containers/NursesContainer'
export default () => [
  {
    path: ROUTES.NURSES,
    layout: Layouts,
    component: Nurses,
  },
]
