import React, { useState, useEffect } from 'react'
import './App.css';

import { ExpressionField } from '../components/ExpressionField/ExpressionField'
import { TruthTable } from '../components/TruthTable/TruthTable'

export const App: React.FC = () => {
    const [value, setValue] = useState('');

    // TODO: should be react functional comp
    const OnChangeHandler = (e: any) => {
        let html_value: string = e.target.value
        html_value = html_value.replace(/[^a-zA-Z0-9|&∨∧]/, '');
        html_value = html_value.replace('||', '∨');
        html_value = html_value.replace('&&', '∧');
        setValue(html_value)
        e.target.value = html_value 
    }

    useEffect(() => {
        console.log('updated, ', value); 
      }, [value]);

    return (
        <div>
            <ExpressionField onChangeHandler={OnChangeHandler}/>
            <TruthTable />
        </div>
    )
}