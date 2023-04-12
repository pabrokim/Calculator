
//functions for basic math operators
function add(firstNum, secondNum) {
    return firstNum + secondNum; 
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    if(secondNum === 0){
        return 'Cannot divide by zero';
    }else {
        return a / b;
    }
}

let firstNum = '';
let operator = '';
let secondNum ='';

function operate(operator, firstNum, secondNum) {
    if(operator === '+'){
        return add(firstNum, secondNum);
    }else if (operator === '-'){
        return subtract(firstNum, secondNum);
    }else if (operator === '*') {
        return multiply(firstNum, secondNum);
    }else if (operator === '/') {
        return divide(firstNum, secondNum);
    }else {
        return 'Invalid operator';
    }

}

const display = document.querySelector('#displ');

//add event listeners to the number buttons

const numButtons = document.querySelectorAll('.btn.nums');
numButtons.forEach((button) => {button.addEventListener('click', (e) => {
    const num = e.target.innerText;
    if(display.value === '0'){
        display.value = num;
    }else {
        display.value+=num;
    }
   
})});

//event listener for clear button

const clearBtn = document.querySelector('#clearBtn');

clearBtn.addEventListener('click', ()=> {
    display.value = '0';
    firstNum = '';
    operator = '';
    secondNum ='';
})

//event listeners for operators buttons

const oprsBtns = document.querySelectorAll('.btn.oprs');

oprsBtns.forEach((button) => {button.addEventListener('click', (e) => {
    operator = e.target.innerText;
    firstNum = parseFloat(display.value);
    display.value = '';
})})

//event listener for equals button
const equals = document.querySelector('#equal');

equals.addEventListener('click', () => {
    secondNum = parseFloat(display.value);
    const result = operate(operator, firstNum, secondNum);
    display.value = result;
    firstNum = '';
    operator = '';
    secondNum ='';
})


