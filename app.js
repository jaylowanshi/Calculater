function display(value) {
    document.getElementById("result").value += value;
}

function calculate(operator) {
    if (operator == '=') {
        var result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } else {
        document.getElementById("result").value += operator;
    }
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function backspace() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}