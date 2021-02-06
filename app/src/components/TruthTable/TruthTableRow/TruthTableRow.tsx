import React from 'react'

interface Props { 
    tableRow: Boolean[];
    expressionSolution: Boolean;
}

export const TruthTableRow: React.FC<Props> = ({tableRow, expressionSolution}) => {
    return (
        <tr>
            {tableRow.map((tableData, i) => { 
                    return (
                        (tableData)
                            ? <td key={i}>T</td>
                            : <td key={i}>F</td> 

                    )})
                }
                            
            { expressionSolution
                ? <td>T</td>
                : <td>F</td>}

        </tr>
    )
}
