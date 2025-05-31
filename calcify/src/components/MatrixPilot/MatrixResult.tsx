import React from 'react';

interface MatrixResultProps {
  result: string | number | null;
  loading: boolean;
  operation: string;
}

const MatrixResult: React.FC<MatrixResultProps> = ({ result, loading, operation }) => {
  return (
    <div className="matrix-result">
      {loading ? (
        <div className="loader">Calculating...</div>
      ) : (
        <div className="result-display">
          <h3>Result of {operation}:</h3>
          <pre>{result !== null ? JSON.stringify(result, null, 2) : 'No result available'}</pre>
        </div>
      )}
    </div>
  );
};

export default MatrixResult;