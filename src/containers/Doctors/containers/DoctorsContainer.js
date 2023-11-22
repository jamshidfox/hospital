import React, { useEffect } from 'react'
import styled from 'styled-components'
// import Components
import Doctors from '../components/Doctors'
import { useFetchList } from '../../../hooks/useFetchList'
import { getAllDoctors } from '../actions/index'
import axios from 'axios'
import * as STATE from '../../../constants/stateNames'
import * as API from '../../../constants/api'
import { useSelector } from 'react-redux'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
`

const DoctorsContainer = () => {
  const userInfo = useSelector((state) => state?.login?.data)
  const doctorsData = useSelector((state) => state?.all_doctors)
  const doctorsInfo = () => ({
    action: getAllDoctors(99, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }),
    state: STATE.ALL_DOCTORS,
  })
  const data = useFetchList(doctorsInfo())

  return <Container>{doctorsData.data && <Doctors list={doctorsData.data} />}</Container>
}

export default DoctorsContainer
