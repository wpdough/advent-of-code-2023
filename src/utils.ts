import axios from "axios";

export function formatDay(day: string) {
  return parseInt(day) < 10 ? `0${day}` : day;
}

export async function fetchInput(day: string, sessionCookie: string) {
  const res = await axios.get(
    `https://adventofcode.com/2023/day/${day}/input`,
    {
      headers: {
        Cookie: `session=${sessionCookie}`,
      },
    }
  );
  return res.data.split("\n") as string[];
}
