export class Helper {
    static permute(n: number): boolean[][] {
        let outputArray: boolean[][] = []
        for (let i = 0; i < Math.pow(2, n) ; ++i) {
            let bin = new Number(i).toString(2);
            if (bin.length < n) {
                let zeros = '0'.repeat(n - bin.length);
                bin = zeros + bin;
            }
            let boolArray = [];
            for (let c of bin) {
                if (c === '1') {
                    boolArray.push(true);
                } else {
                    boolArray.push(false);
                }
            }       

            outputArray.push(boolArray);
        }
        return outputArray;
    }

    static remove(array: string[], value: string): string[] {
        return array.filter(e => e !== value);
    }

    static parse(str: string): number {
        return Function(`'use strict'; return (${str})`)()
    }

    static replaceHTML(str: string): string {
            // using Function constructor as code can only be executed client side on users browser
            return str.replace(/[^a-zA-Z|&∨∧¬()!]/ig, '')
                .replace(/[^\x00-\x7F∨∧¬]/ig, '') // block all none ascii characters
                .replace('||', '∨')
                .replace('&&', '∧')
                .replace('!', '¬');
    }
}
