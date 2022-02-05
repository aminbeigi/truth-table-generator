import React from "react";
import { StyledTable } from "./styled";
import { TruthTableHeader } from "./TruthTableHeader/TruthTableHeader";
import { TruthTableRow } from "./TruthTableRow/TruthTableRow";

interface Props {
  tableHeaders: string[];
  tableRows: Boolean[][];
  expression: string;
  expressionSolutions: Boolean[];
}

export const TruthTable: React.FC<Props> = ({
  tableHeaders,
  tableRows,
  expression,
  expressionSolutions,
}) => {
  const row_length = [];
  for (let i = 0; i < Math.pow(2, tableHeaders.length); ++i) {
    row_length.push("F");
  }

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            {tableHeaders.map((tableHeader, i) => {
              return <TruthTableHeader key={i} tableHeader={tableHeader} />;
            })}
            <th>{expression}</th>
          </tr>
        </thead>

        <tbody>
          {tableRows.map((tableRow, i) => {
            return (
              <TruthTableRow
                key={i}
                tableRow={tableRow}
                expressionSolution={expressionSolutions[i]}
              />
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
};
