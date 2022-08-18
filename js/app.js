
// ** random number generate

function randomNumber(){
    return Math.round(Math.random()*10000)
}

// ** generate pin

function generatePin  (randomNumber){

    const pin = randomNumber();
    const pinString = pin.toString();
    
    if (pinString.length === 4) {
        return pinString;
    } else {
        return generatePin(randomNumber);
    }
}


document.getElementById('generate-pin').addEventListener('click', function(){

    const pin = generatePin(randomNumber);

    const inputDisplayField = document.getElementById('pin-display');
    inputDisplayField.value = pin;

});

document.getElementById('calculator').addEventListener('click', function(event){
    
    const previousButtonText = event.target.innerText;
    
    const displayShowField= document.getElementById('display');

    if (isNaN(previousButtonText) ){

        if (previousButtonText === 'C') {
            displayShowField.value = '';
        } else if (previousButtonText === '<'){
            const displayValueArray = displayShowField.value.split('');
            displayValueArray.pop();
            displayShowField.value = displayValueArray.join('');
        }
        
    } else {
        
        displayShowField.value = displayShowField.value + previousButtonText ;
    }
})