// creating a class Calculator having all functions to perform
class Calculator {
    constructor(upOperands, downOperands) {
        this.upOperands = upOperands;
        this.downOperands = downOperands;
        this.clear();
    }

    // To clear the O/P screen
    clear()
    {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    // To delete individual characters
    delete()
    {
        this.currentOperand = this.currentOperand.toString().slice(0,-1); // Taking substring upto second last digit
    }

    // Appending numbers on O/P Screen
    appendNumber(number)
    {
        if(number === '.' && this.currentOperand.includes('.')) return; // To limit no. of '.' i.e decimal
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation)
    {
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute()
    {
        let computeResult; // To store the result
        const prev = parseFloat(this.previousOperand);  // To extract number from string
        const current = parseFloat(this.currentOperand);   // To extract number from string
        if(isNaN(prev) || isNaN(current)) return;

        switch(this.operation) {
            case '+':
                computeResult = prev+current;
                break;
            case '-':
                computeResult = prev-current;
                break;
            case '÷':
                if (current === 0) {
                    alert("Cannot divide by zero");
                    return;
                } else {
                    computeResult = prev / current;
                }
                break;
            case '*':
                computeResult = prev*current;
                break;
            default:
                return;
             

        }

        this.currentOperand = computeResult;
        this.operation = undefined;
        this.previousOperand = '';

    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay
        if(isNaN(integerDigits)) {
            integerDisplay = ''
        }
        else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits:0,
            })
        }

        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        }
        else
        {
            return integerDisplay;
        }
    }

    updateDisplay()
    {
        this.downOperands.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null) { // when clicked on operation, to move the oprand up along with opertion
            this.upOperands.innerText = 
                `${this.previousOperand} ${this.operation}`;

        }
        else
        {
            this.upOperands.innerText = ''
        }

    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButtons = document.querySelector('[data-equals]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButtons = document.querySelector('[data-all-clear]');
const upOperands = document.querySelector('[data-up-operand]');
const downOperands = document.querySelector('[data-down-operand]');

const calculator = new Calculator(upOperands, downOperands); // Passing values to constructor


// Event to be performed when clicked on Number Button
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText); // append the number associated with each button
        calculator.updateDisplay();
    })
})


// Event to be performed when clicked on Operation Button ( + - * ÷)
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText); // append the number associated with each button
        calculator.updateDisplay();
    })
})

// Event to be performed when clicked on Equals Button
equalsButtons.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})


// Event to be performed when clicked on AC Button
allClearButtons.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

// Event to be performed when clicked on DEL Button
deleteButtons.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})