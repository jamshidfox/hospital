import React from 'react'
import styled from 'styled-components'
// import Components
import AppointmentTable from '../components/Appointment'
import { useFetchList } from '../../../hooks/useFetchList'
import { getAllAppointments } from '../actions/index'
import * as STATE from '../../../constants/stateNames'
import { useSelector } from 'react-redux'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
`

const Appointments = () => {
  const userInfo = useSelector((state) => state?.login?.data)
  const appointmentsData = useSelector((state) => state?.all_appointments)
  const appointments = () => ({
    action: getAllAppointments(5, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }),
    state: STATE.ALL_APPOINTMENTS,
  })

  const data = useFetchList(appointments())
  return (
    <Container>
      {appointmentsData.data && <AppointmentTable list={appointmentsData.data} />}
    </Container>
  )
}

export default Appointments
