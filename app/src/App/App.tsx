import React, { useState, useEffect } from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

import { ExpressionField } from '../components/ExpressionField/ExpressionField'
import { TruthTable } from '../components/TruthTable/TruthTable'
import { Icons } from '../components/Icons/Icons'

import { permute } from '../lib/helper'

export const App: React.FC = () => {
    // TODO: give undefined type
    const [value, setValue] = useState('');
    const [tableHeaders, setTableHeaders] = useState<string[]>([]);
    const [tableRows, setTableRows] = useState<Boolean[][]>([]);
    const [expressionSolution, setExpressionSolution] = useState<Boolean>(false);

    // TODO: should be react functional comp?
    const OnChangeHandler = (e: any) => {
        let html_value: string = e.target.value
        html_value = html_value.replace(/[^a-zA-Z|&∨∧]/, '');
        html_value = html_value.replace('||', '∨');
        html_value = html_value.replace('&&', '∧');
        setValue(html_value)
        e.target.value = html_value 
    }

    // on start
    useEffect(() => {
        document.body.style.backgroundColor = '#212529' 
    }, [])

    useEffect(() => {
        console.log('updated, ', value); 

        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let char_array = [];
        for (let c of value) {
            if (!alphabet.includes(c)) {
                continue;
            }
            char_array.push(c);
        }
        const tableRows = permute(char_array.length);
        setTableHeaders(char_array);
        setTableRows(tableRows)
        setExpressionSolution(true);
    }, [value]);

    return (
        <div>
            <ExpressionField onChangeHandler={OnChangeHandler}/>

            {value.length === 0 
                ? ''
                :
                    <Container className="truth-table-container">
                        <TruthTable tableHeaders={tableHeaders} tableRows={tableRows} expression={value} expressionSolution={expressionSolution}/>
                    </Container>
            }
            <div className="icon-container">
                <Icons />
            </div>
        </div>
    )
}