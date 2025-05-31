import React, { useState } from 'react';

const TrigInput: React.FC<{ onCalculate: (angle: number) => void }> = ({ onCalculate }) => {
    const [angle, setAngle] = useState<number | ''>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAngle(value === '' ? '' : Number(value));
    };

    const handleCalculate = () => {
        if (typeof angle === 'number') {
            onCalculate(angle);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="number"
                value={angle}
                onChange={handleInputChange}
                placeholder="Enter angle in degrees"
                className="border rounded p-2 mb-2"
            />
            <button onClick={handleCalculate} className="bg-blue-500 text-white rounded p-2">
                Calculate
            </button>
        </div>
    );
};

export default TrigInput;