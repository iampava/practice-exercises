function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

function diff(...args) {
    return args.reduce((acc, curr) => acc - curr);
}

function mull(...args) {
    return args.reduce((acc, curr) => acc * curr, 1);
}

function div(...args) {
    return args.reduce((acc, curr) => acc / curr);
}

module.exports = {
    sum,
    diff, 
    mull, 
    div
}