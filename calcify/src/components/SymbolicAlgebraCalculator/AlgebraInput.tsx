import React, { useState } from 'react';

const AlgebraInput: React.FC<{ onSubmit: (expressionA: string, expressionB: string) => void }> = ({ onSubmit }) => {
    const [expressionA, setExpressionA] = useState('');
    const [expressionB, setExpressionB] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(expressionA, expressionB);
        setExpressionA('');
        setExpressionB('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                value={expressionA}
                onChange={(e) => setExpressionA(e.target.value)}
                placeholder="Enter first expression"
                className="p-2 border rounded"
            />
            <input
                type="text"
                value={expressionB}
                onChange={(e) => setExpressionB(e.target.value)}
                placeholder="Enter second expression"
                className="p-2 border rounded"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                Calculate
            </button>
        </form>
    );
};

export default AlgebraInput;