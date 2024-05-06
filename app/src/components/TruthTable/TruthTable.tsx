import React from "react";

import { StyledTable } from "./styled";
import { TruthTableHeader } from "./TruthTableHeader/TruthTableHeader";
import { TruthTableRow } from "./TruthTableRow/TruthTableRow";

interface Props {
  tableHeaders: string[];
  tableRows: boolean[][];
  expression: string;
  expressionSolutions: boolean[];
}

export const TruthTable: React.FC<Props> = ({
  tableHeaders,
  tableRows,
  expression,
  expressionSolutions,
}) => {
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            {tableHeaders.map((tableHeader, index) => (
              <TruthTableHeader key={index} tableHeader={tableHeader} />
            ))}
            <th>{expression}</th>
          </tr>
        </thead>

        <tbody>
          {tableRows.map((tableRow, index) => (
            <TruthTableRow
              key={index}
              tableRow={tableRow}
              expressionSolution={expressionSolutions[index]}
            />
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};
