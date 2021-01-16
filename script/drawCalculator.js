//  Variable Declaration
const historyScreen  = document.querySelector('#historyScreen');
const mainScreen     = document.querySelector('#mainScreen');
const numbers        = document.querySelectorAll('.number');
const clearButton    = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace')
const operators = document.querySelectorAll('.operator');
// Events
clearButton.addEventListener('click', clearScreen);
backspaceButton.addEventListener('click', backspace);
numbers.forEach( number => number.addEventListener('click', addText))
operators.forEach( operator => operator.addEventListener('click', addHistory))


// Function Definitions
function addText(e){
    console.log(e)
    mainScreen.innerText += e.srcElement.innerText; 
}

function clearScreen(){
    historyScreen.innerText = '';
    mainScreen.innerText = '';
}

function backspace(){
    mainScreen.innerText = mainScreen.innerText.substring(0, mainScreen.innerText.length - 1 ); 
}

function addHistory(){
    historyScreen.innerText = mainScreen.innerText;
    mainScreen.innerText = '';
}
