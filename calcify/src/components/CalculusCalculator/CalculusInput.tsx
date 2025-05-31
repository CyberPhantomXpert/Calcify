import React, { useState } from 'react';

const CalculusInput: React.FC<{ onCalculate: (expression: string, operation: 'differentiate' | 'integrate') => void }> = ({ onCalculate }) => {
    const [expression, setExpression] = useState('');
    const [variable, setVariable] = useState('');
    const [operation, setOperation] = useState<'differentiate' | 'integrate'>('differentiate');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (expression && variable) {
            onCalculate(expression, operation);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                placeholder="Enter expression (e.g., x^2 + sin(x))"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                className="p-2 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Enter variable (e.g., x)"
                value={variable}
                onChange={(e) => setVariable(e.target.value)}
                className="p-2 border border-gray-300 rounded"
            />
            <div className="flex space-x-4">
                <button
                    type="button"
                    onClick={() => setOperation('differentiate')}
                    className={`p-2 rounded ${operation === 'differentiate' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Differentiate
                </button>
                <button
                    type="button"
                    onClick={() => setOperation('integrate')}
                    className={`p-2 rounded ${operation === 'integrate' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Integrate
                </button>
            </div>
            <button type="submit" className="p-2 bg-green-500 text-white rounded">
                Calculate
            </button>
        </form>
    );
};

export default CalculusInput;