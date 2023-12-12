let display_value;

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

function digit_pressed(digit) {
    if (document.getElementById("output").innerHTML == "0") {
        document.getElementById("output").innerHTML = null;
    } if (digit == "C") {
        document.getElementById("output").innerHTML = "0";
    } else {
        document.getElementById("output").innerHTML += digit;
    };
};

document.querySelectorAll('button').forEach(el =>{
    el.addEventListener('click', () =>{
        digit_pressed(el.textContent);
        display_value = el.textContent;
    });
});
