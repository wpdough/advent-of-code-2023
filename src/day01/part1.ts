import { Solver } from "../types";

export default class Part1 implements Solver {
  solve(input: string[]): number {
    const calibrationValues = input
      .map(this.extractDigits)
      .map(determineCalibrationValue);
    return calibrationValues.reduce((acc, curr) => acc + curr, 0);
  }

  private extractDigits(line: string): number[] {
    return line
      .split("")
      .map((char) => parseInt(char))
      .filter((num) => num);
  }
}

export function determineCalibrationValue(digits: number[]): number {
  const firstAndLastDigit = [digits[0], digits[digits.length - 1]];
  const calibrationValue = parseInt(firstAndLastDigit.join(""));
  return calibrationValue;
}
