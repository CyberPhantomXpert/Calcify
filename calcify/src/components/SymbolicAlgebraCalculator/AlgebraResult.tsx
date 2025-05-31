import React from 'react';

interface AlgebraResultProps {
    result: string;
    error: string | null;
}

const AlgebraResult: React.FC<AlgebraResultProps> = ({ result, error }) => {
    return (
        <div className="mt-4 p-4 border rounded-lg bg-gray-800 text-white">
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <div>
                    <h2 className="text-lg font-bold">Result:</h2>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default AlgebraResult;