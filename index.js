
const display = document.getElementById('display');


function appendToDisplay(input){
    display.value += input
}

function cleardisplay(){
    display.value = "";
}

function calculate(){
    try{
        x = eval(display.value);
        console.log(x);
        display.value = x;
    }
    catch(error){
        display.value = 'Error';
    }
}