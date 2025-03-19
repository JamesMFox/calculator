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

const buttonColumn = document.getElementsByClassName("button-column");
