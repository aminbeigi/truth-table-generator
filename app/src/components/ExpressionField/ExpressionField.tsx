import React from 'react'
import { StyledInputGroup, StyledFormControl, Wrapper } from './styled'

interface Props { 
    onChangeHandler: (e: any) => void;
}

export const ExpressionField: React.FC<Props> = ({onChangeHandler}) => {
    return (
        <Wrapper>
            <StyledInputGroup onChange={onChangeHandler} size="lg" className="mb-3">
                <StyledFormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter an expression"/>
            </StyledInputGroup>
        </Wrapper>
    )
}
