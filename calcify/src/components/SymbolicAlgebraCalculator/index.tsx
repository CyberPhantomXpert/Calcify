import React, { useState } from 'react';
import AlgebraInput from './AlgebraInput';
import AlgebraResult from './AlgebraResult';
import { simplifyExpression, addExpressions, subtractExpressions, multiplyExpressions } from '../../utils/algebraUtils';

const SymbolicAlgebraCalculator: React.FC = () => {
    const [expressionA, setExpressionA] = useState<string>('');
    const [expressionB, setExpressionB] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleAddition = () => {
        try {
            const sum = addExpressions(expressionA, expressionB);
            setResult(sum);
            setError('');
        } catch (err) {
            setError('Error in addition: ' + err.message);
        }
    };

    const handleSubtraction = () => {
        try {
            const difference = subtractExpressions(expressionA, expressionB);
            setResult(difference);
            setError('');
        } catch (err) {
            setError('Error in subtraction: ' + err.message);
        }
    };

    const handleMultiplication = () => {
        try {
            const product = multiplyExpressions(expressionA, expressionB);
            setResult(product);
            setError('');
        } catch (err) {
            setError('Error in multiplication: ' + err.message);
        }
    };

    const handleSimplification = () => {
        try {
            const simplified = simplifyExpression(expressionA);
            setResult(simplified);
            setError('');
        } catch (err) {
            setError('Error in simplification: ' + err.message);
        }
    };

    return (
        <div className="symbolic-algebra-calculator">
            <h2>Symbolic Algebra Calculator</h2>
            <AlgebraInput 
                expressionA={expressionA} 
                setExpressionA={setExpressionA} 
                expressionB={expressionB} 
                setExpressionB={setExpressionB} 
            />
            <div className="controls">
                <button onClick={handleAddition}>Add</button>
                <button onClick={handleSubtraction}>Subtract</button>
                <button onClick={handleMultiplication}>Multiply</button>
                <button onClick={handleSimplification}>Simplify</button>
            </div>
            {error && <div className="error">{error}</div>}
            <AlgebraResult result={result} />
        </div>
    );
};

export default SymbolicAlgebraCalculator;