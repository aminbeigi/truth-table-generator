import React, { useState, useEffect } from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

import { ExpressionField } from '../components/ExpressionField/ExpressionField'
import { TruthTable } from '../components/TruthTable/TruthTable'
import { Icons } from '../components/Icons/Icons'
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage'

import { permute, remove, parse } from '../shared/helper'

export const App: React.FC = () => {
    // TODO: wrong font loads on startup - wait till font loads
    // TODO: write own eval function
    // TODO: better description
    // TODO: icon middle click
    // TODO: export default vs export
    const [value, setValue] = useState<string>('');
    const [emptyValue, setEmptyValue] = useState<Boolean>();
    const [invalidValue, setInvalidValue] = useState<string>('');
    const [tableHeaders, setTableHeaders] = useState<string[]>([]);
    const [tableRows, setTableRows] = useState<Boolean[][]>([]);
    const [expressionSolutions, setExpressionSolutions] = useState<Boolean[]>([]);

    // TODO: use this
    //const [state, setState] = useState({
    //    temp: '',
    //})
         
    

    // TODO: should be react functional comp?
    // TODO: wot the hell is e
    // TODO: catch illegal characters
    const OnChangeHandler = (e: any) => {
        let html_value: string = e.target.value
        html_value = html_value.replace(/[^a-zA-Z|&∨∧¬()!]/ig, '');
        // block all none ascii characters
        html_value = html_value.replace(/[^\x00-\x7F∨∧¬]/ig, '');
        html_value = html_value.replace('||', '∨');
        html_value = html_value.replace('&&', '∧');
        html_value = html_value.replace('!', '¬');
        setValue(html_value)
        e.target.value = html_value 
    }

    // on start
    useEffect(() => {
        document.body.style.backgroundColor = '#212529' 
    }, [])

    useEffect(() => {
        // TODO: ternary operator here(?)
        // TODO: add helper functions
        if (value.length === 0) {
            setEmptyValue(false);
            return;
        }
        setEmptyValue(true);
        let operandArray: string[]|string = [];
        let operand: string = '';
        for (let c of value) {
            // TODO: add helper functions
            console.log("stack BEFORE: ", operandArray)
            
            if (c === '|' || c === '&' || c === '¬' || c === '(' || c === ')') {
                // pass;
            }
            else if (c === '∨' || c === '∧') {
                operand = '';
            }
            else { 
                operand += c;

                if (operand.length > 1) {
                    operandArray.pop();
                }

                if (operandArray.includes(operand)) {
                    operandArray.push('');
                } else {
                    operandArray.push(operand);
                }
            } 

            console.log("stack AFTER: ", operandArray)
        }

        operandArray = remove(operandArray, '');
        const tableRows = permute(operandArray.length);

        let expressionSolutionArray: Boolean[] = [];
        for (let boolArray of tableRows) {

            let boolStr: string;
            let bool: boolean;
            let evalString: string = value;

            evalString = evalString.replaceAll('∨', '||');
            evalString = evalString.replaceAll('∧', '&&');
            evalString = evalString.replaceAll('¬', '!');

            for (let i = 0; i < operandArray.length; ++i) {
                bool = boolArray[i]
                if (bool){
                    boolStr = '1';
                } else {
                    boolStr = '0';
                }
                evalString = evalString.replaceAll(new RegExp("\\b" + operandArray[i] + "\\b",  'g'), boolStr);
            }
                try {
                    console.log(evalString)
                    // TODO: regexp dont work for unicode

                    /*
                    const regex = /(\w)\|(\w)/g;
                    if (regex.test(evalString)) {
                        throw 'Error: missing operand';
                    }
                    */

                    //let regex = /[^a-zA-z10!\x00-\x7F]/ig;
                    const illegalCharRegex = /[^10||&&!]/g;
                    if (illegalCharRegex.test(evalString)) {
                        throw 'Error: illegal character';
                    }

                    let expression: number = parse(evalString);
                    // eval() will sometimes return bool true instead of number 1??
                    // TODO: doesn't work when === ?
                    if (expression == 1 || expression) {
                        expressionSolutionArray.push(true);
                    } else if (expression == 0 || expression) {
                        expressionSolutionArray.push(false);
                    }
                    setInvalidValue('')
                } catch (e) {
                    console.log('skip... ' + e)
                    // doesn't catch unicode
                    if (e === "Error: illegal character") {
                        setInvalidValue('illegal character')
                    } else if (e === "Error: missing operand") {
                        setInvalidValue('missing operand')
                    } else if (e instanceof SyntaxError) {
                        setInvalidValue("invalid syntax")
                    } else {
                        setInvalidValue('invalid input')
                    }
                }
        }

        setTableHeaders(operandArray);
        setTableRows(tableRows)
        setExpressionSolutions(expressionSolutionArray);
    }, [value]);

    return (
        <div className="app">
            <h1 className="title">Truth Table Generator</h1>
            <ExpressionField onChangeHandler={OnChangeHandler}/>

            { !emptyValue
                ? ''
                :
                invalidValue
                    ? <ErrorMessage errorMessage={invalidValue} value={value}/>
                    :   
                    <Container className="truth-table-container">
                        <TruthTable tableHeaders={tableHeaders} tableRows={tableRows} expression={value} expressionSolutions={expressionSolutions}/>
                    </Container>
            }
            <div className="icon-container">
                <Icons />
            </div>
        </div>
    )
}