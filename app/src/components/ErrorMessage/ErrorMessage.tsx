import React from 'react'
import {ErrorMessageDiv} from './styled'

interface Props { 
    errorMessage: string;
    value: string;
}

export const ErrorMessage: React.FC<Props> = ({errorMessage, value}) => {
    return (
        <ErrorMessageDiv className="error-message">
            <h2>{value}</h2>
            <p>{errorMessage}</p>
        </ErrorMessageDiv>
    )
}

