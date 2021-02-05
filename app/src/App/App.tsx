import React from 'react';
import './App.css';

import { ExpressionField } from '../components/ExpressionField/ExpressionField'
import { TruthTable } from '../components/TruthTable/TruthTable'

export const App: React.FC = () => {
    return (
        <div>
            <ExpressionField />
            <TruthTable />
        </div>
    )
}