import React from 'react'
import { Wrapper, SyntaxOkay, SyntaxBad, ErrorMessageText } from './styled'

interface Props { 
    errorMessage: string;
    errorObject: any;
}

export const ErrorMessage: React.FC<Props> = ({errorMessage, errorObject}) => {
    let value = errorObject['value'];
    let index = errorObject['index'];
    let syntaxBadOperator = value[index];
    let array = value.split(syntaxBadOperator);
    console.log('value: ', value)
    console.log('index: ', index)
    console.log(array)
    return (
        <Wrapper>
            <SyntaxOkay>{errorObject['value']}<SyntaxBad>blah</SyntaxBad></SyntaxOkay>
            <ErrorMessageText>{errorMessage}</ErrorMessageText>
        </Wrapper>
    )
}

