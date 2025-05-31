import React, { useState } from 'react';
import TrigInput from './TrigInput';
import TrigResult from './TrigResult';
import { calculateTrigonometric } from '../../utils/trigonometryUtils';

const TrigonometryCalculator: React.FC = () => {
    const [angle, setAngle] = useState<number | null>(null);
    const [results, setResults] = useState<{ sin: number | null; cos: number | null; tan: number | null }>({
        sin: null,
        cos: null,
        tan: null,
    });

    const handleCalculate = (inputAngle: number) => {
        setAngle(inputAngle);
        const sinValue = calculateTrigonometric('sin', inputAngle);
        const cosValue = calculateTrigonometric('cos', inputAngle);
        const tanValue = calculateTrigonometric('tan', inputAngle);
        setResults({ sin: sinValue, cos: cosValue, tan: tanValue });
    };

    return (
        <div className="trigonometry-calculator">
            <TrigInput onCalculate={handleCalculate} />
            <TrigResult angle={angle} results={results} />
        </div>
    );
};

export default TrigonometryCalculator;