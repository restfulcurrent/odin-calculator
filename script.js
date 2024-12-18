// 1. Functions for basic math operators + - * /

function add(augend, addend) {
    return augend + addend;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend
}

function multiply(multiplicand, multiplier) {
    return multiplicand * multiplier;
}

// Returns "Undefined" if we attempt to divide by zero
function divide(dividend, divisor) {
    return (divisor === 0) ? "Undefined" : dividend / divisor;
}

// Perhaps store in an operation object or array later?
let firstTerm = "";
let operator = "";
let secondTerm = "";

const DIVISION_SIGN = "\u00F7";
const MULTIPLICATION_SIGN = "\u00D7";
const MINUS_SIGN = "\u2212";
const PLUS_SIGN = "\u002B";
const EQUALS_SIGN = "\u003D";
const PERCENT_SIGN = "\u0025";
const PLUS_MINUS_SIGN = "\u00B1";

// Calls approprate function to evaluate operation depending on the operator
// input: firstTerm, operator, secondTerm
// returns: result of the operation
function operate(firstTerm, operator, secondTerm) {
    let result = null;
    switch(operator) {
        case PLUS_SIGN:
            result = add(firstTerm, secondTerm);
            break;
        case MINUS_SIGN:
            result = subtract(firstTerm, secondTerm);
            break;
        case MULTIPLICATION_SIGN:
            result = multiply(firstTerm, secondTerm);
            break;
        case DIVISION_SIGN:
            result = divide(firstTerm, secondTerm);
            break;
    }
    return result;
}

const buttons = document.querySelector(".buttons-wrapper");
buttons.addEventListener("click", displayDigit);

function displayDigit(event) {
    const element = event.target; 

    if (![...element.classList].includes("digit")) return;

    const display = document.querySelector(".display-content");
    const newDigit = element.textContent;

    display.textContent += newDigit;

    if (!operator) {
        firstTerm += newDigit;
    } else {
        secondTerm += newDigit;
    }
    console.log(`First term: ${firstTerm}`);
    console.log(`Second term: ${secondTerm}`);
}

buttons.addEventListener("click", storeOperator);

function storeOperator(event) {
    const element = event.target;

    if(![...element.classList].includes("operator")) return;

    const display = document.querySelector(".display-content");
    const newOperator = element.textContent;

    display.textContent += ` ${newOperator} `;
    operator = newOperator;

    console.log(`Operator: ${operator}`);
}