import React from "react";
import { StyledInputGroup, StyledFormControl, Wrapper } from "./styled";

interface Props {
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ExpressionField: React.FC<Props> = ({ onValueChange }) => {
  return (
    <Wrapper>
      <StyledInputGroup onChange={onValueChange} size="lg" className="mb-3">
        <StyledFormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Enter an expression"
        />
      </StyledInputGroup>
    </Wrapper>
  );
};
