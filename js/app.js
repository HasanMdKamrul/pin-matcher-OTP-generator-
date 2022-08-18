
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

})