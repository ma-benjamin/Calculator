



function operate(op, a, b) {
    if(op === '+') {
        return add(a, b)
    } else if(op === '-') {
        return subtract(a, b)
    } else if(op === '*') {
        return multiply(a, b)
    } else if(op === '/') {
        if(b == 0) {
            return null
        } else {
            return divide(a, b)
        }
    } else if (op === "factorial") {
        if(a < 0) {
            return null
        } else {
            return factorial(a)
        }
    } else if (op === "exponent") {
        return exponent(a, b)
    } else {
        return null
    }
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function factorial(x) {
    var product = 1
    while(x > 1) {
        product * x
        x -= 1
    }
    return product
}

function exponent(a,b) {
    var product = 1
    for(var i = 0; i < b; i++) {
        product * a
    }
    return product
}