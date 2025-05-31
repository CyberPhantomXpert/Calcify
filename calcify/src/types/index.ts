export type Matrix = {
  id: string;
  data: (number | string)[][];
  rows: number;
  columns: number;
};

export type OperationResult = {
  result: (number | string)[][];
  operation: string;
};

export type CalculatorInput = {
  expression: string;
  variable?: string;
};

export type Theme = 'light' | 'dark';

export interface TrigonometricFunctions {
  sin: (angle: number) => number;
  cos: (angle: number) => number;
  tan: (angle: number) => number;
}

export interface AlgebraicExpression {
  expressionA: string;
  expressionB: string;
}