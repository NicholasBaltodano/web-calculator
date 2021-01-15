// createButtons()


// function createButtons(){

//     const calculator = document.querySelector('.calculator');
//     //calculator.innerHTML = "";


//     for(let x = 0; x < 4; x++){
//         let newRow = document.createElement('div');
//         newRow.id = x;
//         newRow.className = 'buttonRow';

//         for(let y = 0; y < 4; y++){
//             let newButton = document.createElement('div');
//             newButton.id = y;
//             newButton.className = 'button';
//             newRow.appendChild(newButton); 
//         }
    
//     calculator.appendChild(newRow);

//     }
// }
//  Variable Declaration
const historyScreen  = document.querySelector('#historyScreen');
const mainScreen     = document.querySelector('#mainScreen');
const numbers        = document.querySelectorAll('.number');
const clearButton    = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace')

// Events
clearButton.addEventListener('click', clearScreen);
backspaceButton.addEventListener('click', backspace);
numbers.forEach( number => number.addEventListener('click', addText))


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
