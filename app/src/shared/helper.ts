export const permute = (n: number): boolean[][] => {
    let outputArray: boolean[][] = []
    for (let i = 0; i < Math.pow(2, n) ; ++i) {
        let boolArray = [];
        let bin = new Number(i).toString(2);
        if (bin.length < n) {
            let zeros = '0'.repeat(n - bin.length);
            bin = zeros + bin;
        }
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

export const remove = (array: string[], value: string): string[] => {
    return array.filter(i => i !== value);
}

// WARNING: 
export const parse = (str: string): number => {
    return Function(`'use strict'; return (${str})`)()
}
export const replaceHTML = (str: string): string => {
        str = str.replace(/[^a-zA-Z|&∨∧¬()!]/ig, '');
        str = str.replace(/[^\x00-\x7F∨∧¬]/ig, ''); // block all none ascii characters
        str = str.replace('||', '∨');
        str = str.replace('&&', '∧');
        str = str.replace('!', '¬');
        return str;
}