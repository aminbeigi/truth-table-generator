import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

interface Props { 
    errorMessage: string;
}

export const ErrorMessage: React.FC<Props> = ({errorMessage}) => {
    return (
        <div className="error-message">
            <h1>{errorMessage}</h1>
        </div>
    )
}

