import React from "react";

import { Wrapper, SyntaxOkay, SyntaxBad, ErrorMessageText } from "./styled";
import { IErrorObject } from "../../shared/types";
import { INVALID_SYNTAX_ERROR_MESSAGE } from "../../shared/helper";

interface Props {
  errorObject: IErrorObject;
}

export const ErrorMessage: React.FC<Props> = ({ errorObject }) => {
  const { error, value, index } = errorObject;

  if (error === INVALID_SYNTAX_ERROR_MESSAGE) {
    return (
      <Wrapper>
        <ErrorMessageText>{error}</ErrorMessageText>
      </Wrapper>
    );
  }

  const operator = value[index];
  const [partBeforeOperator, partAfterOperator] = [
    value.slice(0, index),
    value.slice(index + 1),
  ];

  return (
    <Wrapper>
      <SyntaxOkay>
        {partBeforeOperator}
        <SyntaxBad>{operator}</SyntaxBad>
        {partAfterOperator}
      </SyntaxOkay>
      <ErrorMessageText>{error}</ErrorMessageText>
    </Wrapper>
  );
};
