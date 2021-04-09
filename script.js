const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');

let firstNumber = '';
let numberCompose = '';
let operation = '';

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (firstNumber.length != '') {
      screen.value += number.textContent;
    } else {
      numberCompose += number.textContent;
      screen.value = numberCompose;
    }
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    if (operator.textContent == '=') {
      console.log('i want the result');
      let res;

      switch (operation) {
        case '+':
          res = Number(firstNumber) + Number(screen.value.split('+')[1]);
          screen.value = '';
          screen.value += res;
          clearValues();
          break;
        case '−':
          res = Number(firstNumber) - Number(screen.value.split('−')[1]);
          screen.value = '';
          screen.value += res;
          clearValues();
          break;
        case '×': 
          res = Number(firstNumber) * Number(screen.value.split('×')[1]);
          screen.value = '';
          screen.value += res;
          clearValues();
          break;
        case '÷':
          res = Number(firstNumber) / Number(screen.value.split('÷')[1]);
          screen.value = '';
          screen.value += res;
          clearValues();
          break;
      } 
    } else if (operator.textContent == 'AC') {
      screen.value = '';
      clearValues();
    } else {
      console.log('choose an operator');
      firstNumber = numberCompose;
      numberCompose = '';
      operation += operator.textContent;
      screen.value += operation;
    }
  });
});

function clearValues() {
  numberCompose = '';
  firstNumber = '';
  secondNumber = '';
  operation = '';
}







