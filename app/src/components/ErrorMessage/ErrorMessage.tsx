import React from 'react'
import { Wrapper, SyntaxOkay, SyntaxBad, ErrorMessageText } from './styled'

interface Props { 
    errorObject: {
        error: string,
        value: string,
        index: number
    };
}

export const ErrorMessage: React.FC<Props> = ({errorObject}) => {
    if (errorObject['error'] === "Invalid syntax.") {
        return (
            <Wrapper>
                <ErrorMessageText>{errorObject['error']}</ErrorMessageText>
            </Wrapper>
    )   
    }
    let value = errorObject['value'];
    let index = errorObject['index'];
    let operator = value[index];
    const array = [value.slice(0,index), value.slice(index+1)]; // only slice first occurence
    console.log('value: ', value)
    console.log('index: ', index)
    console.log(array)
    return (
        <Wrapper>
            <SyntaxOkay>{array[0]}<SyntaxBad>{operator}</SyntaxBad>{array[1]}</SyntaxOkay>
            <ErrorMessageText>{errorObject['error']}</ErrorMessageText>
        </Wrapper>
    )
}

