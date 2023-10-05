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

const display = document.querySelector('#display');
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    display.innerText = '0';
});
document.querySelectorAll('button.num').forEach((button) => {
    button.addEventListener('click', () => {
        display.innerText = display.innerText === '0' ? button.innerText : display.innerText + button.innerText;
    });
});