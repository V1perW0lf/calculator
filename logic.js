function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(op, a, b) {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function updateDisplay() {
    secondNum = +display.innerText;
    console.log(firstNum, secondNum);
    let displayText = selectedOperation != ''
    ? Math.round(operate(selectedOperation, firstNum, secondNum) * 100) / 100 : secondNum;
    if(secondNum === 0 && selectedOperation == '/') displayText = errorMessage;
    display.innerText = displayText;
    selectedOperation = '';
}

const display = document.querySelector('#display');
const clearButton = document.querySelector('#clear');

let firstNum = 0;
let secondNum = 0;
let selectedOperation = '';
let errorMessage = "Heh, nice try";

document.querySelectorAll('button.operation').forEach((button) => {
    button.addEventListener('click', () => {
        if(selectedOperation != '') updateDisplay();
        selectedOperation = button.innerText;
        firstNum = +display.innerText;
    })
})

clearButton.addEventListener('click', () => {
    display.innerText = '0';
    firstNum = 0;
    secondNum = 0;
    selectedOperation = '';
});

document.querySelectorAll('button.num').forEach((button) => {
    button.addEventListener('click', () => {
        let charToAdd = button.innerText;
        if(display.innerText.includes(".") && charToAdd == ".") charToAdd = '';
        display.innerText = (display.innerText === '0' || (display.innerText === errorMessage)
        || (firstNum == display.innerText && selectedOperation != '')) ? 
        charToAdd : display.innerText + charToAdd;
    });
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', updateDisplay);

const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', () => {
    display.innerText = display.innerText.length > 1 ? display.innerText.slice(0, -1) : 0;
});

const toggleNegativeButton = document.querySelector('#toggle-negative');
toggleNegativeButton.addEventListener('click', () => {
    display.innerText = -display.innerText;
});