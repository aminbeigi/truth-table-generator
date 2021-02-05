import React from 'react'
import { Table } from 'react-bootstrap'

export const TruthTable: React.FC = () => {
    return (
        <div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>p</th>
                  <th>q</th>
                  <th>p and q</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>F</td>
                  <td>F</td>
                  <td>F</td>
                </tr>
                <tr>
                  <td>F</td>
                  <td>T</td>
                  <td>F</td>
                </tr>
              </tbody>
            </Table>
        </div>
    )
}
