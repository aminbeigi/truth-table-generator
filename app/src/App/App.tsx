import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import "./App.css";
import "./Overrides.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { IErrorObject } from "../shared/types";
import { Title, IconWrapper } from "./styled";
import { ExpressionField } from "../components/ExpressionField/ExpressionField";
import { TruthTable } from "../components/TruthTable/TruthTable";
import { Icons } from "../components/Icons/Icons";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import {
  INVALID_CHAR_REGEX,
  parse,
  permute,
  remove,
  replaceHTML,
} from "../shared/helper";

export const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [emptyValue, setEmptyValue] = useState<boolean>();
  const [invalidValue, setInvalidValue] = useState<boolean>();
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [tableRows, setTableRows] = useState<boolean[][]>([]);
  const [expressionSolutions, setExpressionSolutions] = useState<boolean[]>([]);
  const [errorObject, setErrorObject] = useState<IErrorObject>({
    error: "1",
    value: "1",
    index: -1,
  });

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let htmlValue: string = e.target.value;
    htmlValue = replaceHTML(htmlValue);
    setValue(htmlValue);
    e.target.value = htmlValue;
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#212529";
  }, []);

  useEffect(() => {
    if (value.length === 0) {
      setEmptyValue(false);
      return;
    }
    setEmptyValue(true);

    // check if value is valid before evaluating user input
    if (/(∧|∨|¬)$|^(∧|∨)/g.test(value)) {
      const index = value.search(/(∧|∨|¬)$|^(∧|∨|¬)/g);
      const errorMessage = "The operator is missing an operand.";
      setErrorObject({ error: errorMessage, value: value, index: index });
      setInvalidValue(true);
      return;
    }

    if (INVALID_CHAR_REGEX.test(value)) {
      const invalidChar = value.match(INVALID_CHAR_REGEX)?.[0];
      if (!invalidChar) {
        return;
      }
      setErrorObject({
        error: `The character ${invalidChar} shouldn't be there.`,
        value,
        index: value.indexOf(invalidChar),
      });
      setInvalidValue(true);
      return;
    }

    let operandArray: string[] = [];
    let operand = "";
    for (let c of value) {
      if (c === "|" || c === "&" || c === "¬" || c === "(" || c === ")") {
        // pass;
      } else if (c === "∨" || c === "∧") {
        operand = "";
      } else {
        operand += c;

        if (operand.length > 1) {
          operandArray.pop();
        }

        if (operandArray.includes(operand)) {
          operandArray.push("");
        } else {
          operandArray.push(operand);
        }
      }
    }

    operandArray = remove(operandArray, "");
    const tableRows = permute(operandArray.length);

    let expressionSolutionArray: boolean[] = [];
    for (const boolArray of tableRows) {
      let boolStr: string;
      let bool: boolean;
      let evalString = value;

      evalString = evalString.replaceAll("∨", "||");
      evalString = evalString.replaceAll("∧", "&&");
      evalString = evalString.replaceAll("¬", "!");

      for (let i = 0; i < operandArray.length; ++i) {
        bool = boolArray[i];
        boolStr = bool ? "1" : "0";
        evalString = evalString.replaceAll(
          new RegExp("\\b" + operandArray[i] + "\\b", "g"),
          boolStr
        );
      }

      try {
        if (/[^10|&!()]/.test(evalString)) {
          throw SyntaxError;
        }
        let expression: number = parse(evalString);
        // will sometimes return bool true instead of number 1
        if (expression === 1 || expression) {
          expressionSolutionArray.push(true);
        } else if (expression === 0 || expression) {
          expressionSolutionArray.push(false);
        }
        setInvalidValue(false);
      } catch (error: unknown) {
        setErrorObject({ error: "Invalid syntax.", value, index: -1 });
        setInvalidValue(true);
      }
    }
    setTableHeaders(operandArray);
    setTableRows(tableRows);
    setExpressionSolutions(expressionSolutionArray);
  }, [value]);

  return (
    <>
      <Title>Truth Table Generator</Title>
      <ExpressionField onValueChange={onValueChange} />

      {!emptyValue ? (
        ""
      ) : invalidValue ? (
        <ErrorMessage errorObject={errorObject} />
      ) : (
        <Container className="truth-table-container">
          <TruthTable
            tableHeaders={tableHeaders}
            tableRows={tableRows}
            expression={value}
            expressionSolutions={expressionSolutions}
          />
        </Container>
      )}
      <IconWrapper>
        <Icons />
      </IconWrapper>
    </>
  );
};
