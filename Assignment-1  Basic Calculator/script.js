// get values 
function getValues() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        alert("Please enter both numbers.");
        return null;
    }

    return {
        first: Number(num1),
        second: Number(num2)
    };
}

// addition
function add() {
    let numbers = getValues();
    if (numbers === null) {
        return;
    }

    document.getElementById("result").innerHTML =
        "Result: " + (numbers.first + numbers.second);
}

// subtract
function subtract() {
    let numbers = getValues();
    if (numbers === null) {
        return;
    }

    document.getElementById("result").innerHTML =
        "Result: " + (numbers.first - numbers.second);
}

// multiply
function multiply() {
    let numbers = getValues();
    if (numbers === null) {
        return;
    }

    document.getElementById("result").innerHTML =
        "Result: " + (numbers.first * numbers.second);
}

// divide
function divide() {
    let numbers = getValues();
    if (numbers === null) {
        return;
    }

    if (numbers.second === 0) {
        document.getElementById("result").innerHTML =
            "Cannot divide by zero.";
    }
    else {
        document.getElementById("result").innerHTML =
            "Result: " + (numbers.first / numbers.second);
    }
}