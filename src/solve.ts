import "dotenv/config";
import { fetchInput, formatDay } from "./utils";

async function main() {
  if (
    !process.argv[2] ||
    !process.argv[3] ||
    parseInt(process.argv[2]) > 25 ||
    parseInt(process.argv[2]) < 1 ||
    parseInt(process.argv[3]) > 2 ||
    parseInt(process.argv[3]) < 1
  ) {
    console.error(
      "Please provide a day and part number, for example: npm run solve 1 1"
    );
    process.exit(1);
  }

  if (!process.env.AOC_SESSION_COOKIE) {
    console.error(
      "Please provide your Advent of Code session cookie as an environment variable, for example: AOC_SESSION_COOKIE=123456789 npm run solve 1 1"
    );
    process.exit(1);
  }

  const day = process.argv[2];
  const part = process.argv[3];
  const sessionCookie = process.env.AOC_SESSION_COOKIE as string;

  const input = await fetchInput(day, sessionCookie);
  const Solver = require(`./day${formatDay(day)}/part${part}`).default;
  const result = new Solver().solve(input);
  console.log(result);
}

main();
