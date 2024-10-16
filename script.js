console.log('Hello world');

// create a function for adding numbers
let add = (...arg) => {
    return arg.reduce((total, current) => total + current, 0);
}

// create a function for subtracting numbers
let subtract = (a, b) => {
    return a - b;
}

//create a function for multiplying numbers
let multiply = (...arg) => {
    return arg.reduce((total, current) => total * current, 1);
}

//create a function for division
let divide = (a, b) => {
    if(b === 0){
        return screenDisplay.innerText = 0;
    }else{
        return a/b;
    }
}

//variables for addition, subtraction, multiplication and division operator
let addition = '+';

let subtraction = '-';

let multiplication = 'x';

let division = '/';

// variable for firstNumber
let firstNum;

//variable for second number
let secondNum;

// variable for separator
let separator;

// a variable for answer
let answer;

// Assign a variable screen display to display div
let screenDisplay = document.querySelector('#display')

// Assign variable buttons to all the buttons
let buttons = document.querySelectorAll('.numArithmetic');

// variable for referencing + - / and *
let operator = document.querySelectorAll('.arith');

// An array to hold all the inputs from buttons clicked
let input = [];

// variable to hold the output string
let outPut;

// create a function operate
// takes three parameters an operator and two numbers
// use conditionals to call a function based on the operator chosen
let operate = (num1, operator, num2) => {

    switch(operator){
        case addition:
            return add(num1, num2);

        case subtraction:
            return subtract(num1, num2);

        case multiplication:
            return multiply(num1, num2);

        case division:
            return divide(num1, num2);

    }
}

// a function to populate the display for the calculator
let display = (event) => {
    let selected = event.target.innerText;

    let inputSelected = [];

    inputSelected.push(selected);

    input.push(...inputSelected);

    outPut = input.join('');

    screenDisplay.innerText = outPut;

    if(firstNum !== undefined){
        
        secondNum = Number(outPut);

    }
}

//function for doing calculations when operators are clicked
let newDisplay = (event) => {
    console.log(event.target.innerText);

    separator = event.target.innerText;
    console.log(separator);

    if(firstNum === undefined){
        firstNum = Number(outPut);

        input = [];

    }else if(firstNum !== undefined && secondNum === undefined){

        secondNum = Number(outPut);

    }else if(firstNum !== undefined && secondNum !== undefined){

        firstNum = operate(firstNum, separator, secondNum);

        answer = firstNum;

        input = [];

        secondNum = Number(outPut);

        return   screenDisplay.innerText = answer;
    }else{

        alert('error');
    }
}



// add an event listener for the buttons
buttons.forEach((button) => {

        button.addEventListener('click', display);

    
});

//Add reference to buttons AC C and = on the Dom.
let clear = document.querySelector('#refresh-page');

let del = document.querySelector('#del');

let equals = document.querySelector('#equals');

// function for clearing the screen
let reload = () => {
    location.reload();
}

// function for deleting items on the screen one by one
let backSpace = () => {
    input.pop();
    console.log(input);
    outPut = input.join('');
    screenDisplay.innerText = outPut;

    
}

// function for displaying results on the screen
let results = () => {
    if(firstNum === undefined){
        return screenDisplay.innerText = 0;
    }else{
        answer = operate(firstNum, separator, secondNum);
        return screenDisplay.innerText = answer;
    }
}

//Add three event listeners for AC, C and =.

// Event listeners for AC button.
clear.addEventListener('click', reload);

// event listener fo C button
del.addEventListener('click', backSpace);

// event listener for = .
equals.addEventListener('click', results);

// event listener for operators
operator.forEach((button) => {

    console.log(button.innerText);
    button.addEventListener('click', newDisplay);
});