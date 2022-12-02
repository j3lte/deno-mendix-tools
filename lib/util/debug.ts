import { cyan, green } from "../../deps.ts";

const padNum = (num: number, len = 2) => {
  return num.toString().padStart(len, "0");
};

export const debug = (...args: unknown[]) => {
  const DEBUG = Deno.env.get("DEBUG");
  if (DEBUG) {
    const dateTime = new Date();
    const hours = padNum(dateTime.getHours());
    const minutes = padNum(dateTime.getMinutes());
    const seconds = padNum(dateTime.getSeconds());
    const milliseconds = padNum(dateTime.getMilliseconds(), 3);
    const timeStr = green(
      `[ ${hours}:${minutes}:${seconds}.${milliseconds} ]`,
    );
    const debugStr = `${cyan(`[ DEBUG ]`)}${timeStr.padEnd(22, " ")} ::`;

    console.log(debugStr, ...args);
  }
};
