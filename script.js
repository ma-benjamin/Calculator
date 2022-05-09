function operator(op, a, b) {
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

