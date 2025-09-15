class Calculator {
  constructor() {
    //this.compute = compute();

    this.firstnum = document.querySelector('input[id="num1"]');
    this.secondnum = document.querySelector('input[id="num2"]');

    this.calBtn = document.querySelector("#calculateBtn");
    this.result = document.querySelector("#result");

    this.calBtn.addEventListener("click", () => {
      this.compute();
    });
  }

  compute() {
    const operation = document.getElementById("operation");
    const result = document.getElementById("result");

    const num1 = Number(this.firstnum.value);
    const num2 = Number(this.secondnum.value);

    if (operation.value === "add") {
      result.textContent = num1 + num2;
      return num1 + num2;
    } else if (operation.value === "subtract") {
      result.textContent = num1 - num2;
      return num1 - num2;
    } else if (operation.value === "multiply") {
      result.textContent = num1 * num2;
      return num1 * num2;
    } else if (operation.value === "divide") {
      result.textContent = num1 / num2;
      return num1 / num2;
    }
    result.innerText = 
  }
}

const calc = new Calculator();

