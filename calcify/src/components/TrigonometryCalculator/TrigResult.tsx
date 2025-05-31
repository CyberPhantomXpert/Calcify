import React from 'react';

interface TrigResultProps {
    angle: number;
    sine: number;
    cosine: number;
    tangent: number;
}

const TrigResult: React.FC<TrigResultProps> = ({ angle, sine, cosine, tangent }) => {
    return (
        <div className="result-container">
            <h2 className="text-lg font-bold">Trigonometric Results for {angle}°</h2>
            <ul className="list-disc pl-5">
                <li>sin({angle}°) = {sine}</li>
                <li>cos({angle}°) = {cosine}</li>
                <li>tan({angle}°) = {tangent}</li>
            </ul>
        </div>
    );
};

export default TrigResult;