createButtons()


function createButtons(){

    const calculator = document.querySelector('.calculator');
    //calculator.innerHTML = "";


    for(let x = 0; x < 4; x++){
        let newRow = document.createElement('div');
        newRow.id = x;
        newRow.className = 'buttonRow';

        for(let y = 0; y < 4; y++){
            let newButton = document.createElement('div');
            newButton.id = y;
            newButton.className = 'button';
            newRow.appendChild(newButton); 
        }
    
    calculator.appendChild(newRow);

    }
}