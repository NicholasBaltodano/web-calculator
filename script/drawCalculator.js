//  Variable Declaration
const historyScreen  = document.querySelector('#historyScreen');
const mainScreen     = document.querySelector('#mainScreen');
const numbers        = document.querySelectorAll('.number');
const clearButton    = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace')
const operators = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equalButton');
let   latestOperator = '';
let   equalPressed   = false;
let operator;
let operand ;
let operand2;


// Events
clearButton.addEventListener('click', clearScreen);
backspaceButton.addEventListener('click', backspace);
numbers.forEach( number => number.addEventListener('click', addText))
operators.forEach( operator => operator.addEventListener('click', addHistory))
equalButton.addEventListener('click', calculate);


// Function Definitions
function addText(e){
    equalPressed = false;
    if(mainScreen.textContent === "Something went wrong"){
        mainScreen.textContent = '';
    }
    mainScreen.textContent += e.srcElement.textContent; 
}

function clearScreen(){
    historyScreen.textContent = '';
    mainScreen.textContent = '';
    operator = '';
    operand = '';
    operand2 = '';
    equalPressed = false;
}

function backspace(){
    mainScreen.textContent = mainScreen.textContent.substring(0, mainScreen.textContent.length - 1 ); 
}

function addHistory(e){

    operator = e.srcElement.textContent;

    if(mainScreen.textContent !== 'Something went wrong'){
        operand  = Number(mainScreen.textContent);
        historyScreen.textContent = operand + ' ' + operator;
        mainScreen.textContent    = '';
    }  
}


function calculate(){
    
    if(operator === ''){
        mainScreen.textContent = 'Something went wrong';
    }
    else{

        if(!equalPressed){
            operand2 = Number(mainScreen.textContent);
        }
        
        mainScreen.textContent = operate(operator, operand, operand2);
        operand = Number(mainScreen.textContent);
        equalPressed = true;
    }
   
}
