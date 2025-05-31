import React from 'react';

interface CalculusResultProps {
    result: string | null;
    error: string | null;
}

const CalculusResult: React.FC<CalculusResultProps> = ({ result, error }) => {
    return (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <div className="text-green-500">{result}</div>
            )}
        </div>
    );
};

export default CalculusResult;