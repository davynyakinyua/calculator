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

let multiplication = 'x';

let division = '/';

// variable for firstNumber
let firstNum;

//variable for second number
let secondNum;

// variable for separator
let separator;

// Assign a variable screen display to display div
let screenDisplay = document.querySelector('#display')

// Assign variable buttons to all the buttons
let buttons = document.querySelectorAll('.numArithmetic');


// An array to hold all the inputs from buttons clicked
let input = [];

// variable to hold the output string
let outPut;

// create a function input operate to separate first and second number and the separator
let inputOperate = (string) => {

    let separatorIndex;

    //find the index of the separator
    if(string.includes('x')){
        separatorIndex = string.indexOf('x');
    }else if(string.includes('+')){
        separatorIndex = string.indexOf('+');
    }else if(string.includes('-')){
        separatorIndex = string.indexOf('-');
    }else if(string.includes('/')){
        separatorIndex = string.indexOf('/');
    }else{
        console.log(outPut)
    }
    
    // extract the first number, the separator and last number
    let num1 = input.slice(0, separatorIndex).join('');

    separator = input[separatorIndex];

    let num2 = input.slice(separatorIndex + 1).join('');

    firstNum = Number(num1);

    secondNum = Number(num2);
}

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

    inputOperate(outPut);

    screenDisplay.innerText = outPut;
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
    return screenDisplay.innerText = operate(firstNum, separator, secondNum);
}

//Add three event listeners for AC, C and =.

// Event listeners for AC button.
clear.addEventListener('click', reload);

del.addEventListener('click', backSpace);

equals.addEventListener('click', results);
