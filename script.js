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

    if (display.textContent === "Error" || display.textContent === "0")  {
        display.textContent = "";
    }

    if ( elementClasslist.includes("digit") ) { 
        const newDigit = element.textContent;
        display.textContent += newDigit;
    
        if (!operator) {
            firstTerm += newDigit;
        } else {
            secondTerm += newDigit;
        }

    } else if ( elementClasslist.includes("operator") ) {
        const newOperator = element.textContent;


        if(firstTerm && operator && secondTerm) {
            processOperation(display);
        } else if(firstTerm && operator){
            // Remove current operator from display
            const indexOfOperator = display.textContent.indexOf(operator)
            display.textContent = display.textContent.slice(0, indexOfOperator);
        }

        display.textContent += ` ${newOperator} `;
        operator = newOperator;

    } else if ( elementClasslist.includes("evaluate") ) {   
        processOperation(display);

    } else if ( elementClasslist.includes("clear") ) {
        // Clear display
        display.textContent = "";

        // Reset operation state
        firstTerm = operator = secondTerm = "";
    }

    console.log(`First term: ${firstTerm}`);
    console.log(`Operator: ${operator}`);
    console.log(`Second term: ${secondTerm}`);
}

// Evaluates the current expression, updates operation state, displays result
// Input: A reference to the display window
// Returns: true if evaluation was successful, false otherwise
function processOperation(display) {
    const result = operate(firstTerm, operator, secondTerm);

    // Update operation state
    firstTerm = (result === "Error") ? "" : result;
    operator = secondTerm = "";

    // Display result
    display.textContent = result;

    return result != "Error";
}

// Calls approprate function to evaluate operation depending on the operator
// input: the operation to be evaluated
// returns: result of the operation or "Error"
function operate(firstTerm, operator, secondTerm) {
    if(!firstTerm || !operator || !secondTerm) {
        return "Error"
    }

    firstTerm = Number(firstTerm);
    secondTerm = Number(secondTerm);

    switch(operator) {
        case PLUS_SIGN:
            return add(firstTerm, secondTerm);
        case MINUS_SIGN:
            return subtract(firstTerm, secondTerm);
        case MULTIPLICATION_SIGN:
            return multiply(firstTerm, secondTerm);
        case DIVISION_SIGN:
            return divide(firstTerm, secondTerm);
    }
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