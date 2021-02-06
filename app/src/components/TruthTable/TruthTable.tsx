import React from 'react'
import { Table } from 'react-bootstrap'
import { TruthTableHeader } from './TruthTableHeader/TruthTableHeader'
import { TruthTableRow } from './TruthTableRow/TruthTableRow'

interface Props { 
    tableHeaders: string[];
    tableRows: Boolean[][];
    expression: string;
    expressionSolutions: Boolean[];
}

export const TruthTable: React.FC<Props> = ({tableHeaders, tableRows, expression, expressionSolutions}) => {
    const row_length = [];
    for (let i = 0; i < Math.pow(2, tableHeaders.length); ++i) {
        row_length.push('F');
    }

    return (
        <div>
            <Table>
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
                {tableRows.map((tableRow, i) => { 
                            return (
                                    <TruthTableRow tableRow={tableRow} expressionSolution={expressionSolutions[i]}/>
                            )})
                        }
              </tbody>
            </Table>
        </div>
    )
}
