function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide (a, b){
    if(b === 0){
        return "You can't divide by 0";
    }
    return a / b;
}

// console.log(add(5, 6));
// console.log(subtract(5, 6));
// console.log(multiply(5, 6));
// console.log(divide(5, 6));
function operate(operator, a, b){
    switch(operator){
        case 'add': 
            return add(a, b);
            break; 
        case 'subtract':
            return subtract(a,b);
            break;
        case 'multiply': 
            return multiply(a, b);
            break;
        case 'divide': 
            return divide(a, b);
            break;
        default:
            return "Something went wrong";
    }
}
