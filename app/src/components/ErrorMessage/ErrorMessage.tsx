import React from 'react'
import { Wrapper, SyntaxOkay, SyntaxBad, ErrorMessageText } from './styled'

interface Props { 
    errorObject: any;
}

export const ErrorMessage: React.FC<Props> = ({errorObject}) => {
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

