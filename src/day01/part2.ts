import { Solver } from "../types";
import { determineCalibrationValue } from "./part1";

export default class Part2 implements Solver {
  solve(input: string[]): number {
    const calibrationValues = input
      .map(this.extractDigits)
      .map(determineCalibrationValue);
    return calibrationValues.reduce((acc, curr) => acc + curr, 0);
  }

  static readonly DIGIT_STRING_MAP = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  private extractDigits(line: string): number[] {
    const digits = [];
    for (let i = 0; i < line.length; i++) {
      // check if the current position is a traditional digit
      if (!isNaN(parseInt(line[i]))) {
        digits.push(parseInt(line[i]));
      } else {
        // otherwise, check if the current position is a digit string
        const rest = line.slice(i);
        for (const [digitString, digitValue] of Object.entries(
          Part2.DIGIT_STRING_MAP
        )) {
          if (rest.startsWith(digitString)) {
            digits.push(digitValue);
            break;
          }
        }
      }
    }
    return digits;
  }
}
