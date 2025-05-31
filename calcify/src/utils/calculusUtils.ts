import { create, all } from 'mathjs';

const math = create(all, {});

export const differentiate = (expression: string, variable: string): string => {
    try {
        const result = math.derivative(expression, variable).toString();
        return result;
    } catch (error) {
        return 'Error in differentiation: ' + error.message;
    }
};

export const integrate = (expression: string, variable: string): string => {
    try {
        const result = math.integrate(expression, variable).toString();
        return result;
    } catch (error) {
        return 'Error in integration: ' + error.message;
    }
};