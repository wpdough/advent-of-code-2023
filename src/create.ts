import "dotenv/config";
import fs from "fs";
import { formatDay } from "./utils";

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
      "Please provide a day and part number, for example: npm run create 1 1"
    );
    process.exit(1);
  }

  const day = process.argv[2];
  const part = process.argv[3];

  const dir = `./src/day${formatDay(day)}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(
    `${dir}/part${part}.ts`,
    `
import { Solver } from "../types";

export default class Part${part} implements Solver {
  solve(input: string[]): number {

  }
}
  `
  );
}

main();
