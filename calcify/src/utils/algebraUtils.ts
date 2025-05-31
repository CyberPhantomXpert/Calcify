import { simplify, add, subtract, multiply } from 'mathjs';

export const addExpressions = (exprA: string, exprB: string): string => {
    return simplify(add(exprA, exprB)).toString();
};

export const subtractExpressions = (exprA: string, exprB: string): string => {
    return simplify(subtract(exprA, exprB)).toString();
};

export const multiplyExpressions = (exprA: string, exprB: string): string => {
    return simplify(multiply(exprA, exprB)).toString();
};