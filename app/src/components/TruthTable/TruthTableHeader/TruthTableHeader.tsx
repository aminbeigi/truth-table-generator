import React from "react";

interface Props {
  tableHeader: string;
}

export const TruthTableHeader: React.FC<Props> = ({ tableHeader }) => {
  return <th>{tableHeader}</th>;
};
