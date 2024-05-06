import React from "react";

interface Props {
  tableRow: boolean[];
  expressionSolution: boolean;
}

export const TruthTableRow: React.FC<Props> = ({
  tableRow,
  expressionSolution,
}) => {
  return (
    <tr>
      {tableRow.map((tableData, index) => (
        <td key={index}>{tableData ? "T" : "F"}</td>
      ))}
      <td>{expressionSolution ? "T" : "F"}</td>
    </tr>
  );
};
