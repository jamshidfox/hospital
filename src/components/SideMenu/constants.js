import { Layers, Briefcase, PenTool, ShoppingBag, Activity, DollarSign, User } from 'react-feather'
import * as ROUTES from '../../constants/routes'
export default [
  {
    name: 'Dashboard',
    icon: <Layers size={17} />,
    link: ROUTES.DASHBOARD,
  },
  {
    name: 'Watch Users',
    icon: <User size={17} />,
    link: ROUTES.WATH_USERS,
  },
  {
    name: 'Appointments',
    icon: <Briefcase size={17} />,
    link: ROUTES.APPOINTMENTS,
  },
  {
    name: 'Doctors',
    icon: <PenTool size={17} />,
    link: ROUTES.DOCTORS,
  },
  {
    name: 'Nurses',
    icon: <PenTool size={17} />,
    link: ROUTES.NURSES,
  },
  {
    name: 'Departments',
    icon: <ShoppingBag size={17} />,
    link: ROUTES.DEPARTMENT,
  },
  {
    name: 'Patients',
    icon: <Activity size={17} />,
    link: ROUTES.PATIENTS,
  },
  {
    name: 'Payments',
    icon: <DollarSign size={17} />,
    link: ROUTES.PAYMENTS,
  },
]
