import React from 'react';

interface MatrixControlsProps {
    onAddMatrix: () => void;
    onRemoveMatrix: () => void;
    onClearAll: () => void;
    matrixCount: number;
}

const MatrixControls: React.FC<MatrixControlsProps> = ({ onAddMatrix, onRemoveMatrix, onClearAll, matrixCount }) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <button 
                onClick={onAddMatrix} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add Matrix
            </button>
            <button 
                onClick={onRemoveMatrix} 
                disabled={matrixCount <= 2} 
                className={`px-4 py-2 rounded ${matrixCount <= 2 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 text-white hover:bg-red-600'}`}
            >
                Remove Matrix
            </button>
            <button 
                onClick={onClearAll} 
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
                Clear All
            </button>
        </div>
    );
};

export default MatrixControls;