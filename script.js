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
let term1, operator, term2;