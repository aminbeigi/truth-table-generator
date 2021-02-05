import React, { useState, useEffect } from 'react'
import './App.css';

import { ExpressionField } from '../components/ExpressionField/ExpressionField'
import { TruthTable } from '../components/TruthTable/TruthTable'

export const App: React.FC = () => {
    const [value, setValue] = useState('');

    const onChangeHandler = (e: any) => {
        let html_value: string = e.target.value
        // TODO: don't accept characters not in set 
        html_value = html_value.replace(/[^a-zA-Z0-9/-]/, '');
        setValue(html_value)
        e.target.value = html_value 
        console.log(value)
    }

    return (
        <div>
            <ExpressionField onChangeHandler={onChangeHandler}/>
            <TruthTable />
        </div>
    )
}