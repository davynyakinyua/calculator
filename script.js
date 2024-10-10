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
    return a / b;
}

//variables for addition, subtraction, multiplication and division operator
let addition = '+';

let subtraction = '-';

let multiplication = '*';

let division = '/';

// variable for firstNumber
let firstNum;

//variable for second number
let secondNum;

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

console.log(operate(2, '+', 2));

// Assign a variable screen display to display div
let screenDisplay = document.querySelector('#display')

// Assign variable buttons to all the buttons
let buttons = document.querySelectorAll('button');

// An array to hold all the inputs from buttons clicked
let input = [];

// a function to populate the display for the calculator
let display = (event) => {
    let selected = event.target.innerText;

    let inputSelected = [];

    inputSelected.push(selected);

    input.push(...inputSelected);

    let outPut = input.join('');

    screenDisplay.innerText = outPut;
}

// add an event listener for the buttons
buttons.forEach((button) => {
    button.addEventListener('click', display);
});