class Calculator {
    private firstNumberInput: HTMLInputElement;
    private secondNumberInput: HTMLInputElement;
    private resultOutput: HTMLOutputElement;
  
    constructor() {
      this.firstNumberInput = document.createElement("input");
      this.secondNumberInput = document.createElement("input");
      this.resultOutput = document.createElement("output");
  
      this.firstNumberInput.addEventListener("input", this.updateResult.bind(this));
      this.secondNumberInput.addEventListener("input", this.updateResult.bind(this));
  
      document.body.appendChild(this.firstNumberInput);
      document.body.appendChild(this.secondNumberInput);
      document.body.appendChild(this.resultOutput);
    }
  
    private updateResult() {
      const firstNumber = Number(this.firstNumberInput.value);
      const secondNumber = Number(this.secondNumberInput.value);
      const result = firstNumber + secondNumber;
  
      this.resultOutput.value = String(result);
    }
  }
  
  const calculator = new Calculator();
  
  