import React from "react";
import { Wrapper, SyntaxOkay, SyntaxBad, ErrorMessageText } from "./styled";
import { IErrorObject } from "../../shared/types";

interface Props {
  errorObject: IErrorObject;
}

export const ErrorMessage: React.FC<Props> = ({ errorObject }) => {
  if (errorObject["error"] === "Invalid syntax.") {
    return (
      <Wrapper>
        <ErrorMessageText>{errorObject["error"]}</ErrorMessageText>
      </Wrapper>
    );
  }
  const value = errorObject["value"];
  const index = errorObject["index"];
  const operator = value[index];
  const array = [value.slice(0, index), value.slice(index + 1)]; // only slice first occurence
  return (
    <Wrapper>
      <SyntaxOkay>
        {array[0]}
        <SyntaxBad>{operator}</SyntaxBad>
        {array[1]}
      </SyntaxOkay>
      <ErrorMessageText>{errorObject["error"]}</ErrorMessageText>
    </Wrapper>
  );
};
