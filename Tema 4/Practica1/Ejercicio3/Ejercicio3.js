var Calculator = /** @class */ (function () {
    function Calculator() {
        this.firstNumberInput = document.createElement("input");
        this.secondNumberInput = document.createElement("input");
        this.resultOutput = document.createElement("output");
        this.firstNumberInput.addEventListener("input", this.updateResult.bind(this));
        this.secondNumberInput.addEventListener("input", this.updateResult.bind(this));
        document.body.appendChild(this.firstNumberInput);
        document.body.appendChild(this.secondNumberInput);
        document.body.appendChild(this.resultOutput);
    }
    Calculator.prototype.updateResult = function () {
        var firstNumber = Number(this.firstNumberInput.value);
        var secondNumber = Number(this.secondNumberInput.value);
        var result = firstNumber + secondNumber;
        this.resultOutput.value = String(result);
    };
    return Calculator;
}());
var calculator = new Calculator();
