//THEMS
document.getElementById('num1').addEventListener('click', function() {
    document.getElementById('ball').style.left = '2px';
    reloadPage()
  });

  document.getElementById('num2').addEventListener('click', function() {
    document.getElementById('ball').style.left = '16px';
    var body=document.querySelector('body');
    body.style.background='hsl(0, 0%, 90%)'
    var num1=document.getElementById('num1')
    num1.style.color='hsl(60, 10%, 19%)'
    var num2=document.getElementById('num2')
    num2.style.color='hsl(60, 10%, 19%)'
    var num3=document.getElementById('num3')
    num3.style.color='hsl(60, 10%, 19%)'
    var THEM=document.querySelector('.THEM')
    THEM.style.color='hsl(60, 10%, 19%)'
    var calc =document.querySelector('.calc')
    calc.style.color='hsl(60, 10%, 19%)'
    var result=document.getElementById('result')
    result.style.color='hsl(60, 10%, 19%)'
    result.style.background='hsl(0, 0%, 100%)'
    var boxtree=document.querySelector('.box-three')
    boxtree.style.background='hsl(0, 5%, 81%)'
    var buttons = document.getElementsByClassName('butn');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.color='hsl(60, 10%, 19%)';
        buttons[i].style.background='hsl(0, 0%, 93%)';
    }
    var del=document.getElementById('del')
    del.style.color='hsl(0, 0%, 100%)'
    del.style.background='hsl(185, 42%, 37%)'

    var reset=document.getElementById('reset')
    reset.style.color='hsl(0, 0%, 100%)'
    reset.style.background='hsl(185, 42%, 37%)'

    var equals=document.getElementById('equals')
    equals.style.color='hsl(0, 0%, 100%)'
    equals.style.background='hsl(25, 98%, 40%)'

  });

  document.getElementById('num3').addEventListener('click', function() {
    document.getElementById('ball').style.left = '35px';


    var body=document.querySelector('body');
    body.style.background='hsl(268, 75%, 9%)'
    var num1=document.getElementById('num1')
    num1.style.color='hsl(52, 100%, 62%)'
    var num2=document.getElementById('num2')
    num2.style.color='hsl(52, 100%, 62%)'
    var num3=document.getElementById('num3')
    num3.style.color='hsl(52, 100%, 62%)'
    var THEM=document.querySelector('.THEM')
    THEM.style.color='hsl(52, 100%, 62%)'
    var calc =document.querySelector('.calc')
    calc.style.color='hsl(52, 100%, 62%)'
    var result=document.getElementById('result')
    result.style.color='hsl(52, 100%, 62%)'
    result.style.background='hsl(268, 71%, 12%)'
    var boxtree=document.querySelector('.box-three')
    boxtree.style.background='hsl(268, 71%, 12%)'
    var buttons = document.getElementsByClassName('butn');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.color='hsl(52, 100%, 62%)';
        buttons[i].style.background='hsl(281, 89%, 26%)';

    }
    var del=document.getElementById('del')
    del.style.color='hsl(0, 0%, 100%)'
    del.style.background='hsl(285, 91%, 52%)'

    var reset=document.getElementById('reset')
    reset.style.color='hsl(0, 0%, 100%)'
    reset.style.background='hsl(285, 91%, 52%)'

    var equals=document.getElementById('equals')
    equals.style.color='hsl(0, 0%, 100%)'
    equals.style.background='hsl(176, 100%, 44%)'
  
  });


//Calculate values
    
var resultField = document.getElementById('result');
function appendNumber(num) {
  resultField.value = resultField.value.toString() + num.toString();
}
function appendOperator(op) {
  resultField.value = resultField.value.toString() + op.toString();
}
function deleteLast() {
  resultField.value = resultField.value.slice(0, -1);
}
function reset() {
  resultField.value = '';
}
function calculate() {
  try {
    resultField.value = eval(resultField.value);
  } catch {
    resultField.value = 'Error';
  }
}



function reloadPage() {
  location.reload();
}











//00000000
    // let operation = '';
    // let currentNumber = '';
    // let previousNumber = '';

    // const display = document.querySelector('.totle');
    // const numberButtons = document.querySelectorAll('.butn');
    // const operationButtons = document.querySelectorAll('#collecting, #subtract, #portion, #hit');
    // const equalsButton = document.querySelector('#equals');
    // const deleteButton = document.querySelector('#del');
    // const resetButton = document.querySelector('#reset');

    // numberButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         appendNumber(button.innerText);
    //         updateDisplay();
    //     });
    // });

    // operationButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         chooseOperation(button.innerText);
    //         updateDisplay();
    //     });
    // });

    // equalsButton.addEventListener('click', () => {
    //     compute();
    //     updateDisplay();
    // });

    // deleteButton.addEventListener('click', () => {
    //     deleteNumber();
    //     updateDisplay();
    // });

    // resetButton.addEventListener('click', () => {
    //     reset();
    //     updateDisplay();
    // });

    // function appendNumber(number) {
    //     if (number === '.' && currentNumber.includes('.')) return;
    //     currentNumber = currentNumber.toString() + number.toString();
    // }

    // function chooseOperation(op) {
    //     if (currentNumber === '') return;
    //     if (previousNumber !== '') {
    //         compute();
    //     }
    //     operation = op;
    //     previousNumber = currentNumber;
    //     currentNumber = '';
    // }

    // function compute() {
    //     let computation;
    //     const prev = parseFloat(previousNumber);
    //     const current = parseFloat(currentNumber);
    //     if (isNaN(prev) || isNaN(current)) return;
    //     switch (operation) {
    //         case '+':
    //             computation = prev + current;
    //             break;
    //         case '-':
    //             computation = prev - current;
    //             break;
    //         case 'X':
    //             computation = prev * current;
    //             break;
    //         case '/':
    //             computation = prev / current;
    //             break;
    //         default:
    //             return;
    //     }
    //     currentNumber = computation;
    //     operation = undefined;
    //     previousNumber = '';
    // }

    // function deleteNumber() {
    //     currentNumber = currentNumber.toString().slice(0, -1);
    // }

    // function reset() {
    //     currentNumber = '';
    //     previousNumber = '';
    //     operation = undefined;
    // }

    // function updateDisplay() {
    //     display.innerText = currentNumber;
    // }