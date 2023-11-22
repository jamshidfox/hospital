import React from 'react'
import styled from 'styled-components'
import { Table } from 'reactstrap'
const Container = styled('div')`
  display: flex;
`
const TableDesign = styled(Table)`
  background: white;
  width: 100%;
  height: 70px;
`
const TableContainer = () => {
  return (
    <TableDesign size="l">
      <thead>
        <tr>
          <th></th>
          <th>Ism Familyasi</th>
          <th>ID kodi</th>
          <th>Doktor uchun tolov</th>
          <th>Soat uchun tolov</th>
          <th>Jami tolovlar</th>
          <th>Qarzlar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Jamshidbek Kobilov</td>
          <td>M34O245T</td>
          <td>340.000 so'm</td>
          <td>120.000 so'm</td>
          <td>460.000 so'm</td>
          <td>2538200 so'm</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Abdulloh Qosimov</td>
          <td>T67309Y7</td>
          <td>620.000 so'm</td>
          <td>140.000 so'm</td>
          <td>760.000 so'm</td>
          <td>0 so'm</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Ilhom Uktamov</td>
          <td>U637P85E</td>
          <td>980.000 so'm</td>
          <td>110.000 so'm</td>
          <td>1.000.090 so'm</td>
          <td>0 so'm</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Muhammad Raimov</td>
          <td>Q56D809Y</td>
          <td>420.000 so'm</td>
          <td>95.000 so'm</td>
          <td>515.000 so'm</td>
          <td>0 so'm</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Muhammadrizo Zokirjonov</td>
          <td>DB7339N6</td>
          <td>540.000 so'm</td>
          <td>30.000 so'm</td>
          <td>570.000 so'm</td>
          <td>0 so'm</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Roziya Jahangirova</td>
          <td>R530K73N</td>
          <td>210.000 so'm</td>
          <td>320.000 so'm</td>
          <td>530.000 so'm</td>
          <td>0 so'm</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Abdulaziz Birnimayev</td>
          <td>W842J84B</td>
          <td>250.000 so'm</td>
          <td>400.000 so'm</td>
          <td>650.000 so'm</td>
          <td>0 so'm</td>
        </tr>
      </tbody>
    </TableDesign>
  )
}

export default TableContainer
