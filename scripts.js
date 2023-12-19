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

function display(digit) {
    if (digit == "C") {
        document.getElementById("output").innerHTML = "0";
    } if (digit != "=") {
        document.getElementById("output").innerHTML += digit;
    };
};

function tokenize(s) {
    const r = [];
    let token = '';
    for (const character of s) {
        if ('*/+-'.includes(character)) {
            if (token === '' && character === '-') {
                token = '-';
            } else {
                r.push(parseFloat(token), character);
                token = '';
            }
        } else {
            token += character;
        }
    }
    if (token !== '') {
        r.push(parseFloat(token));
    }
    return r;
};

function operate(tokens) {
    const operatorPrecedence = [{'*': (a, b) => multiply(a,b), '/': (a, b) => divide(a,b)},
                                {'+': (a, b) => sum(a,b), '-': (a, b) => subtract(a,b)}];
    let operator;
    for (const operators of operatorPrecedence) {
        const newTokens = [];
        for (const token of tokens) {
            if (token in operators) {
                operator = operators[token];
            } else if (operator) {
                newTokens[newTokens.length - 1] = 
                    operator(newTokens[newTokens.length - 1], token);
                operator = null;
            } else {
                newTokens.push(token);
            }
        }
        tokens = newTokens;
    }
    if (tokens.length > 1) {
        console.log('Error: unable to resolve calculation');
        return tokens;
    } else {
        return tokens[0];
    }
};

function display_result() { 
    let x = document.getElementById("output").textContent 
    let y = operate(tokenize(x)) 
    document.getElementById("output").innerHTML = y 
}; 

document.querySelectorAll('button').forEach(el =>{
    el.addEventListener('click', () =>{
        display(el.textContent);
        if (el.className === "key equal") {
            console.log("Enter"); 
            let x = document.getElementById("output").textContent 
            console.log(x); 
            display_result(); 
        };
    });
});
