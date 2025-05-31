import React, { useState } from 'react';
import CalculusInput from './CalculusInput';
import CalculusResult from './CalculusResult';
import { differentiate, integrate } from '../../utils/calculusUtils';

const CalculusCalculator: React.FC = () => {
    const [expression, setExpression] = useState('');
    const [variable, setVariable] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleDifferentiate = () => {
        try {
            const differentiated = differentiate(expression, variable);
            setResult(differentiated);
            setError(null);
        } catch (err) {
            setError('Error in differentiation: ' + err.message);
            setResult(null);
        }
    };

    const handleIntegrate = () => {
        try {
            const integrated = integrate(expression, variable);
            setResult(integrated);
            setError(null);
        } catch (err) {
            setError('Error in integration: ' + err.message);
            setResult(null);
        }
    };

    return (
        <div className="calculus-calculator">
            <CalculusInput 
                expression={expression} 
                setExpression={setExpression} 
                variable={variable} 
                setVariable={setVariable} 
                onDifferentiate={handleDifferentiate} 
                onIntegrate={handleIntegrate} 
            />
            <CalculusResult result={result} error={error} />
        </div>
    );
};

export default CalculusCalculator;