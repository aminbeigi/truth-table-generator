import React from 'react'

interface Props { 
    tableRow: Boolean[];
}

export const TruthTableRow: React.FC<Props> = ({tableRow}) => {
    const test = true;
    return (
        <tr>
            {tableRow.map(tableData => { 
                    return (
                            (tableData)
                              ? <td>T</td> 
                              : <td>F</td> 

                    )})
                }
        </tr>
    )
}
