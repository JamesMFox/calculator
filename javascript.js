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
    fullReset();
  } else {
    return a / b;
  }
};

function operate(a, opp, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch(arguments[1]){
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  };
};

const buttonColumn = document.getElementById("btn-col");
const display = document.getElementById("display");
const history = document.getElementById("history");
let numOne = '';
let numTwo = '';
let tempNum = '';
let operand = '';
let total = '';

buttonColumn.addEventListener("click", (e) => {
  if (e.target.classList.contains("calc-btn")) {
    if (e.target.innerText === 'C') {
        fullReset();
    } else if (e.target.classList.contains("btn-operand") && !e.target.classList.contains("enter")){
        assignToNumber(tempNum);
        setOperand(e.target.innerText);

    // Do something with an Enter button
    } else if (e.target.innerText.includes('=')) {
      assignToNumber(tempNum);
      console.log(`one: ${numOne}, two: ${numTwo}, operand: ${operand}`)
      history.innerText = operate(numOne, operand, numTwo);
      display.innerText = '0';

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
    }
        tempNum = display.innerText;
  }
})

function assignToNumber(temp) {
  if (numOne === '') {
    numOne = temp;
    console.log(`numOne: ${numOne}`);
    history.innerText = numOne;
    softReset();
    return numOne
  } else if (numTwo === '') {
    numTwo = temp;
    console.log(`numTwo: ${numTwo}`);
    return numTwo;
  } else {
    console.log("error");
    return "ERROR CANT ASSIGN"
  }
}

function setOperand(oper) {
  if (numOne === '') return;
  if (operand === '') {
    operand = oper;
    history.innerText += ` ${operand}`;
    softReset();
  } else {
    numOne = operate(numOne, operand, numTwo);
    operand = oper;
    history.innerText = `${numOne} ${operand}`;
    softReset();
  }
}

function softReset() {
  display.innerText = '0';
  tempNum = '';
  numTwo = '';
};

function fullReset() {
  display.innerText = '0';
  history.innerText = '';
  numOne = '';
  numTwo = '';
  tempNum = '';
  operand = '';
}