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

// Cutoff large numbers so that they don't overflow the display
// That depends on the size of the display. Implement later

// Perhaps store in an operation object or array later?
let firstTerm = "0";
let operator = "";
let secondTerm = "";

// Calls approprate function to evaluate operation depending on the operator
// input: firstTerm, operator, secondTerm
// returns: result of the operation
function operate(firstTerm, operator, secondTerm) {
    let result = null;
    switch(operator) {
        case "+":
            result = add(firstTerm, secondTerm);
            break;
        case "-":
            result = subtract(firstTerm, secondTerm);
            break;
        case "*":
            result = multiply(firstTerm, secondTerm);
            break;
        case "/":
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

    display.textContent += element.textContent;
}

buttons.addEventListener("click", storeOperator);