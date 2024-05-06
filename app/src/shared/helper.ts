export function permute(n: number): boolean[][] {
  let outputArray: boolean[][] = [];
  for (let i = 0; i < Math.pow(2, n); ++i) {
    let bin = i.toString(2);
    if (bin.length < n) {
      bin = "0".repeat(n - bin.length) + bin;
    }

    const binArray = Array.from(bin);
    const boolArray: boolean[] = binArray.map((c) => c === "1");

    outputArray.push(boolArray);
  }
  return outputArray;
}

export function remove(array: string[], value: string): string[] {
  return array.filter((e) => e !== value);
}

export function parse(str: string): number {
  return Function(`'use strict'; return (${str})`)();
}

export function replaceHTML(str: string): string {
  return str
    .replace(/[^a-zA-Z|&∨∧¬()!]/gi, "")
    .replace(/[^\x00-\x7F∨∧¬]/gi, "")
    .replace("||", "∨")
    .replace("&&", "∧")
    .replace("!", "¬");
}

export const INVALID_CHAR_REGEX = /[/|&]/g;
export const INVALID_SYNTAX_ERROR_MESSAGE = "Invalid syntax."