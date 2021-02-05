import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

export const ExpressionField: React.FC = () => {
    return (
        <div>
            <h1 className="title">Truth Table Generator</h1>
            <InputGroup size="lg" className="mb-3">
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </div>
    )
}
