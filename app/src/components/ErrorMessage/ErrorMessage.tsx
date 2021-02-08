import React from 'react'
import { Wrapper, SyntaxOkay, SyntaxBad, ErrorMessageText } from './styled'

interface Props { 
    errorMessage: string;
    value: string;
}

export const ErrorMessage: React.FC<Props> = ({errorMessage, value}) => {
    return (
        <Wrapper>
            <SyntaxOkay>{value}<SyntaxBad>blah</SyntaxBad></SyntaxOkay>
            <ErrorMessageText>{errorMessage}</ErrorMessageText>
        </Wrapper>
    )
}

