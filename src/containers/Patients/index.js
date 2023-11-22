import * as ROUTES from '../../constants/routes'
import Layouts from '../../components/Layout/HorizontalLayouts'
import PatientContainer from './containers/PatinetsContainer'
import APatientInfo from './containers/APatientInfoContainer'
export default () => [
  {
    path: ROUTES.PATIENTS,
    layout: Layouts,
    component: PatientContainer,
  },
  {
    path: ROUTES.APATIENT_INFO,
    layout: Layouts,
    component: APatientInfo,
  },
]
