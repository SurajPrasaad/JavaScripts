const operator = document.querySelectorAll('.operator');
        const display = document.getElementById('display');
        const value = document.querySelectorAll('.value');
        let currentInput = '';
        let previousInput = '';
        let operatorUsed = '';

        operator.forEach((button) => {
            button.addEventListener('click', (e) => {
                let value = e.target.innerText;
                if (value === 'C') {
                    currentInput = '';
                    previousInput = '';
                    operatorUsed = '';
                    display.textContent = '0';
                } else if (value === '⌫') {
                    currentInput = currentInput.slice(0, -1);
                    display.textContent = currentInput || '0';
                } else if (value === '=') {
                    if (previousInput && operatorUsed) {
                        currentInput = calculate(previousInput, currentInput, operatorUsed);
                        display.textContent = currentInput;
                        previousInput = '';
                        operatorUsed = '';
                    }
                } else {
                    if (['+', '-', '*', '÷', '%'].includes(value)) {
                      if (previousInput && currentInput !== '') {
                          currentInput = calculate(previousInput, currentInput, operatorUsed);
                          display.textContent = currentInput + value;
                          previousInput = currentInput;
                          currentInput = '';

                      }else{
                        previousInput = currentInput;
                        currentInput = '';
                        display.textContent += value;
                      }

                      operatorUsed = value;

                    } else {
                        currentInput += value;
                        display.textContent = currentInput;
                    }
                }
            });
        });

        function calculate(number1, number2, operator) {
            number1 = parseFloat(number1);
            number2 = parseFloat(number2);

            switch (operator) {
                case '+':
                    return number1 + number2;
                case '-':
                    return number1 - number2;
                case '*':
                    return number1 * number2;
                case '÷':
                    return number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
                 case '%':
                    return number1 % number2;
                default:
                    return number2;
            }
        }

        value.forEach((button) => {
            button.addEventListener('click', (e) => {
                let value = e.target.innerText;
                if (display.textContent === '0' && value !== '.') {
                    display.textContent = value;
                    currentInput = value;
                } else {
                    display.textContent += value;
                    currentInput += value;
                }
            });
        });