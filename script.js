function getNumbers() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  return { num1, num2 };
}

function add() {
  const { num1, num2 } = getNumbers();
  document.getElementById("result").innerText = "Result: " + (num1 + num2);
}

function subtract() {
  const { num1, num2 } = getNumbers();
  document.getElementById("result").innerText = "Result: " + (num1 - num2);
}

function multiply() {
  const { num1, num2 } = getNumbers();
  document.getElementById("result").innerText = "Result: " + (num1 * num2);
}

function divide() {
  const { num1, num2 } = getNumbers();
  if (num2 === 0) {
    document.getElementById("result").innerText = "Cannot divide by zero";
    return;
  }
  document.getElementById("result").innerText = "Result: " + (num1 / num2);
}
