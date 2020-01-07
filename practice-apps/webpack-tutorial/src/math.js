export function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

export function diff(...args) {
    return args.reduce((acc, curr) => acc - curr);
}

export function mull(...args) {
    return args.reduce((acc, curr) => acc * curr, 1);
}

export function div(...args) {
    return args.reduce((acc, curr) => acc / curr);
}