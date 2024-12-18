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

const buttons = document.querySelector(".buttons-wrapper");
buttons.addEventListener("click", handleClick);

function handleClick(event) {
    const element = event.target;
    const elementClasslist = [...element.classList];
    const display = document.querySelector(".display-content");

    if ( elementClasslist.includes("digit") ) {
        if (display.textContent === "Error") {
            display.textContent = "";
        }
    
        const newDigit = element.textContent;
        display.textContent += newDigit;
    
        if (!operator) {
            firstTerm += newDigit;
        } else {
            secondTerm += newDigit;
        }

    } else if ( elementClasslist.includes("operator") ) {
        const newOperator = element.textContent;

        display.textContent += ` ${newOperator} `;
        operator = newOperator;

    } else if ( elementClasslist.includes("evaluate") ) {   
        let result = "";

        if(!firstTerm || !operator || !secondTerm) {
            result = "Error";
        } else {
            firstTerm = Number(firstTerm);
            secondTerm = Number(secondTerm);
        
            result = operate(firstTerm, operator, secondTerm);
        }
    
        firstTerm = (result === "Error") ? "" : result;
        operator = secondTerm = "";
    
        display.textContent = result;
    } else if ( elementClasslist.includes("clear") ) {
        display.textContent = "";
        firstTerm = operator = secondTerm = "";
    }

    console.log(`First term: ${firstTerm}`);
    console.log(`Operator: ${operator}`);
    console.log(`Second term: ${secondTerm}`);
}

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