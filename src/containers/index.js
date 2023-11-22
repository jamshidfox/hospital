import dashboard from './Dashboard'
import appoinments from './Appointment'
import doctors from './Doctors'
import deparment from './Departments'
import patients from './Patients'
import payments from './Payments'
import help from './Help'
import watch_users from './WathUsers'
import login from './Login'
import nurses from './Nurses'
const tester = () => [
  ...dashboard(),
  ...appoinments(),
  ...doctors(),
  ...deparment(),
  ...patients(),
  ...payments(),
  ...help(),
  ...watch_users(),
  ...login(),
  ...nurses(),
]
const Routes = (store) => [...tester(store)]

export default Routes
