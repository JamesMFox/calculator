function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  if (b === 0) {
    return "lmao";
  } else {
    return a / b;
  }
};

function operate(a, opp, b) {
  switch(arguments[1]){
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  };
};

const buttonColumn = document.getElementById("btn-col");
const history = document.getElementById("history");
const display = document.getElementById("display");
let numOne = '';
let numTwo = '';
let tempNum = '';
let operand = '';

buttonColumn.addEventListener("click", (e) => {
  if (e.target.classList.contains("calc-btn")) {
    if (e.target.innerText === 'C') {
      fullReset();
    } else if (e.target.classList.contains("btn-operand") && !e.target.classList.contains("enter")){
      if (operand != '') {
        operate(numOne, operand, numTwo);
      }
      assignToNumber(tempNum);
      operand = e.target.innerText;
      console.log(`operand: ${operand}`);
      softReset();

    // Do something with an Enter button
    } else if (e.target.innerText.includes('=')) {
      // Do something for the '.' button press.
    } else if (e.target.innerText === '.') {

      // Ignore the second '.' button press
      if (display.innerText.includes(".")) {
        console.log("ERROR 2nd '.' button press!");
  
      } else {
        display.innerText += '.';
      }
    
    


    } else {
      if (display.innerText === '0') {
        display.innerText = e.target.innerText;
      } else {
        display.innerText += e.target.innerText;
      }
      tempNum = display.innerText;
    }
  }
})

function assignToNumber(temp) {
  if (numOne === '') {
    numOne = temp;
    // addToHistory(numOne, 0);
    console.log(`numOne: ${numOne}`);
    softReset();
    return numOne
  } else if (numTwo === '') {
    numTwo = temp;
    history.innerText = numTwo;
    // addToHistory(numTwo, 1);
    console.log(`numTwo: ${numTwo}`);
    softReset();
    return numTwo;
  } else {
    console.log("error");
    return "ERROR CANT ASSIGN"
  }
}

function addToHistory(num, historyDOM) {
  historyDom 
}

function softReset() {
  display.innerText = '0';
  tempNum = '';
};

function fullReset() {
  display.innerText = '0';
  numOne = '';
  numTwo = '';
  tempNum = '';
  operand = '';
}