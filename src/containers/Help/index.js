import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layout/HorizontalLayouts'
import HelpContainer from './containers/HelpContainer'
export default () => [
  {
    path: ROUTES.HELP,
    layout: Layouts,
    component: HelpContainer,
  },
]
