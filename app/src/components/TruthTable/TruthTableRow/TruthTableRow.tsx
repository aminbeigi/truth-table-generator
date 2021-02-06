import React from 'react'

interface Props { 
    tableRow: Boolean[];
    expressionSolution: Boolean;
}

export const TruthTableRow: React.FC<Props> = ({tableRow, expressionSolution}) => {
    return (
        <tr>
            {tableRow.map(tableData => { 
                    return (
                        (tableData)
                            ? <td>T</td>
                            : <td>F</td> 

                    )})
                }
                            
            { expressionSolution
                ? <td>T</td>
                : <td>F</td>}

        </tr>
    )
}
