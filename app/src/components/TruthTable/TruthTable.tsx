import React from 'react'
import { Table } from 'react-bootstrap'
import { TruthTableHeader } from './TruthTableHeader/TruthTableHeader'
import { TruthTableRow } from './TruthTableRow/TruthTableRow'

interface Props { 
    tableHeaders: string[];
    expression: string;
}

export const TruthTable: React.FC<Props> = ({tableHeaders, expression}) => {
    const row_length = [];
    for (let i = 0; i < Math.pow(2, tableHeaders.length); ++i) {
        row_length.push('F');
    }

    return (
        <div>
            <Table striped bordered>
                <thead>
                    <tr>
                        {tableHeaders.map(tableHeader => { 
                            return (
                                <TruthTableHeader tableHeader={tableHeader}/>
                            )})
                        }
                        <th>{expression}</th>
                    </tr>
                </thead>

                <tbody>
                {row_length.map(i => { 
                            return (
                                <TruthTableRow />
                            )})
                        }
              </tbody>
            </Table>
        </div>
    )
}
