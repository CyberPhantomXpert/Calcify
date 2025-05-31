import React, { useState } from 'react';

const MatrixInput = () => {
    const [matrices, setMatrices] = useState([{ id: 1, rows: 2, cols: 2, data: Array(2).fill(Array(2).fill('0')) }]);

    const handleMatrixChange = (id, row, col, value) => {
        setMatrices(prevMatrices => {
            const updatedMatrices = prevMatrices.map(matrix => {
                if (matrix.id === id) {
                    const updatedData = matrix.data.map((r, rIndex) => {
                        if (rIndex === row) {
                            const newRow = [...r];
                            newRow[col] = value;
                            return newRow;
                        }
                        return r;
                    });
                    return { ...matrix, data: updatedData };
                }
                return matrix;
            });
            return updatedMatrices;
        });
    };

    const addMatrix = () => {
        setMatrices(prevMatrices => [
            ...prevMatrices,
            { id: prevMatrices.length + 1, rows: 2, cols: 2, data: Array(2).fill(Array(2).fill('0')) }
        ]);
    };

    const removeMatrix = (id) => {
        setMatrices(prevMatrices => prevMatrices.filter(matrix => matrix.id !== id));
    };

    const clearAll = () => {
        setMatrices([{ id: 1, rows: 2, cols: 2, data: Array(2).fill(Array(2).fill('0')) }]);
    };

    return (
        <div>
            {matrices.map(matrix => (
                <div key={matrix.id}>
                    <h3>Matrix {matrix.id}</h3>
                    <table>
                        <tbody>
                            {matrix.data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, colIndex) => (
                                        <td key={colIndex}>
                                            <input
                                                type="text"
                                                value={cell === '0' ? '' : cell}
                                                onFocus={() => handleMatrixChange(matrix.id, rowIndex, colIndex, '')}
                                                onBlur={() => handleMatrixChange(matrix.id, rowIndex, colIndex, cell === '' ? '0' : cell)}
                                                onChange={(e) => handleMatrixChange(matrix.id, rowIndex, colIndex, e.target.value)}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={() => removeMatrix(matrix.id)}>Remove Matrix</button>
                </div>
            ))}
            <button onClick={addMatrix}>Add Matrix</button>
            <button onClick={clearAll}>Clear All</button>
        </div>
    );
};

export default MatrixInput;