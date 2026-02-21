let firstnum = "";      
let operator = "";  
let secnum = "";      
const display = document.getElementById("display");
function updateDisplay() {
    display.value = firstnum + " " + operator + " " + secnum;
}

function appendNumber(num) {
    if (operator === "") {
        firstnum += num;
    } else {
        secnum += num;
    }
    updateDisplay();
}

function setOperator(op) {
    if (firstnum=== "") return;       
    if (operator !== "") return;   
    operator = op;
    updateDisplay();
}

function calculate() {
    if (firstnum === "" || secnum === "") return;
    let num1 = Number(firstnum);
    let num2 = Number(secnum);
    let result = 0;
    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {
        result = num1 / num2;
    }
    firstnum = result.toString();
    operator = "";
    secnum = "";

    updateDisplay();
}

function clearAll() {
    firstnum = "";
    operator = "";
    secnum = "";
    updateDisplay();
}

function removeLast() {
    if (secnum !== "") {
        secnum = secnum.slice(0, -1);
    }
    else if (operator !== "") {
        operator = "";
    }
    else {
        firstnum = firstnum.slice(0, -1);
    }
    updateDisplay();
}
