import React from 'react';
import MatrixInput from './MatrixInput';
import MatrixControls from './MatrixControls';
import MatrixResult from './MatrixResult';

const MatrixPilot: React.FC = () => {
    return (
        <div className="matrix-pilot">
            <MatrixInput />
            <MatrixControls />
            <MatrixResult />
        </div>
    );
};

export default MatrixPilot;