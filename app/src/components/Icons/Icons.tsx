import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export const Icons: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        // TODO: new line on body
        <>
            <div><button onClick={() => window.open('https://github.com/aminbeigi/truth-table-generator')}><i className="fab fa-github"></i></button></div>
            <div><button onClick={handleShow}><i className="far fa-question-circle"></i></button></div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Help</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Enter an expression in the input box to get started.
                    Valid operators:

                    <ul>
                        <li>
                            And: &&
                        </li>
                        <li>
                            Or: ||
                        </li>
                        <li>
                            Negation: !
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
