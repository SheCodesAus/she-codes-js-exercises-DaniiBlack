// function add() {
    // let numberElement = document.getElementById("number");
    // let number = numberElement.value; was incorrect, example of getting undefined. 
    // let number = numberElement.innerText;
    // ^^ above line is saying: document.getElementById("number").innerText;
    // number = number + 1;
    // number = parseInt(number) + 1;
    // the below line updates (under-the-hood) the innertext -- over in html, the wrapper with number value >0<
    // numberElement.innerText = number;
    // console.log("this is my debugging string: ", numberElement);
    // console.log("Number: ", number);
// }

// const numberElement = document.getElementById("number");

// function add(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = parseInt(number) + step;
//     numberElement.innerText = number;
//     console.log("Number: ", number);
// }

// function subtract(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     subtractNumber = parseInt(number) - step;
//     numberElement.innerText = subtractNumber;
//     console.log("SUBTRACT NUMBER: ", subtractNumber); 
// }

// function multiply(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     multiplyNumber = parseInt(number) * step;
//     numberElement.innerText = multiplyNumber;
//     console.log("multiply NUMBER: ", multiplyNumber); 
// }


// a way to calculate, with fewer functions....
// if additon, do addition 
// if subraction, do subtraction
// if multiplication, do multiplication 
function calculate(opp, step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    if (opp === 'addition') {
        number = parseInt(number) + step;
    } else if (opp === 'subtraction') {
        number = parseInt(number) - step;
    } else if (opp === 'multiply') {
        number = parseInt(number) * step;
    } else if (opp === 'division') {
        number = parseInt(number) / step;
    }
    numberElement.innerText = number
};

