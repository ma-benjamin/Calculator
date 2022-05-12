
let first_number = '';
let second_number = '';
let current_operator = null;
let reset = false;
let containsDecimal = false;


const operators = document.querySelectorAll("button.operator")
const numbers = document.querySelectorAll("button.number")
const equalBtn = document.getElementById("equal")
const clearBtn = document.getElementById("clear")
const deleteBtn = document.getElementById("delete")
const previous_operation = document.getElementById("previous_operation")
const current_operation = document.getElementById("current_display")

numbers.forEach((button) =>
    button.addEventListener('click', () => addNumber(button.textContent))
)
operators.forEach((button) => 
    button.addEventListener('click', () => store_first(button.textContent))
)
clearBtn.addEventListener('click', () => resetDisplay())
deleteBtn.addEventListener('click', () => removeLast())
equalBtn.addEventListener('click', () => operation(current_operation.textContent))


function removeLast() {
    current_operation.textContent = current_operation.textContent.slice(0, -1)
}

function operation(b) {
    if(current_operator === null) return
    second_number = b
    var answer = operate(current_operator, first_number, second_number)
    previous_operation.textContent = previous_operation.textContent + second_number + ' ='
    current_operation.textContent = answer
    first_number = answer
    current_operator = null
    reset = true
}

function store_first(op) {
    first_number = current_operation.textContent
    if(op.trim() === "xy") {
        current_operator = "exponent"
        previous_operation.textContent = first_number + "^"
        reset = true
    } else {
        current_operator = op.trim()
        previous_operation.textContent = first_number + op
        reset = true
    }
    containsDecimal = false
}

function addNumber(a) {
    if(containsDecimal && a.trim() === ".") return
    if(a.trim() === "." && current_operation.textContent === '') {
        current_operation.textContent = "0."
        containsDecimal = true
    } else if(current_operation.textContent === '0' || reset) 
        resetDisplay()
    if(a.trim() === ".") containsDecimal = true
    current_operation.textContent = current_operation.textContent+a.trim()
}

function resetDisplay() {
    current_display.textContent = ''
    reset = false
    containsDecimal = false
}



function operate(op, a, b) {
    a = Number(a)
    b = Number(b)
    if(op === "+") {
        return add(a, b)
    } else if(op === "-") {
        return subtract(a, b)
    } else if(op === "×") {
        return multiply(a, b)
    } else if(op === "÷") {
        if(b == 0) {
            return null
        } else {
            return divide(a, b)
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
        product *= a
    }
    return product
}