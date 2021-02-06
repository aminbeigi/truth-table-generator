import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

interface Props { 
    onChangeHandler: (e: any) => void;
}

export const ExpressionField: React.FC<Props> = ({onChangeHandler}) => {
    return (
        <div>
            <InputGroup onChange={onChangeHandler} size="lg" className="mb-3">
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </div>
    )
}
