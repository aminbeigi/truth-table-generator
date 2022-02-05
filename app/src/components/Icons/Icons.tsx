import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BodyText, UL, LI, StyledModalTitle } from "./styled";

export const Icons: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const githubLink = "https://github.com/aminbeigi/truth-table-generator";

  return (
    <>
      <div>
        <a href={githubLink}>
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div>
        <button onClick={handleShow}>
          <i className="far fa-question-circle"></i>
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <StyledModalTitle>Help</StyledModalTitle>
        </Modal.Header>
        <Modal.Body>
          <BodyText>
            This tool generates truth tables for propositional logic formulas.
          </BodyText>
          <BodyText>
            For example, the formula p ∧ q could be written as p || q.
          </BodyText>
          <BodyText>
            Enter an expression in the input box to get started.
          </BodyText>
          <p></p>
          <BodyText>Valid operators:</BodyText>
          <UL>
            <LI>And: &amp;&amp;</LI>
            <LI>Or: ||</LI>
            <LI>Negation: !</LI>
          </UL>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
