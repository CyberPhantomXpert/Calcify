import React from 'react';
import MatrixPilot from '../components/MatrixPilot';
import SimpleCalculator from '../components/SimpleCalculator';
import TrigonometryCalculator from '../components/TrigonometryCalculator';
import CalculusCalculator from '../components/CalculusCalculator';
import SymbolicAlgebraCalculator from '../components/SymbolicAlgebraCalculator';
import ThemeToggle from '../components/ThemeToggle';
import Loader from '../components/Loader';

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <ThemeToggle />
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">Calcify</h1>
            <MatrixPilot />
            <SimpleCalculator />
            <TrigonometryCalculator />
            <CalculusCalculator />
            <SymbolicAlgebraCalculator />
            <Loader />
        </div>
    );
};

export default Page;