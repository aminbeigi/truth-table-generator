import React from 'react'
import './App.css';

import { ExpressionField } from '../components/ExpressionField/ExpressionField'
import { TruthTable } from '../components/TruthTable/TruthTable'

export const App: React.FC = () => {
    const onChangeHandler = (event: any) => {
        console.log(event.target.value)
    }
    return (
        <div>
            <ExpressionField onChangeHandler={onChangeHandler}/>
            <TruthTable />
        </div>
    )
}