function sum(a , b) {
    return a + b;
};

function subtract(a , b) {
    return a - b;
};

function multiply(a , b) {
    return a * b;
};

function divide(a , b) {
    return a / b;
};

let first, second, operator;

function operate(first, second, operator) {
    operator(first, second);
};