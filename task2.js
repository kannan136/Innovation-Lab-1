function whileLoop() {
  let output = "";
  let i = 1;
  while (i <= 10) {
    output += i + "\n";
    i++;
  }
  document.getElementById("output").textContent = output;
}

function doWhileLoop() {
  let number;
  do {
    number = prompt("Enter a number greater than 0:");
  } while (number <= 0 || isNaN(number));
  document.getElementById("output").textContent = "You entered: " + number;
}

function forLoop() {
  let n = parseInt(prompt("Enter value of N:"));
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  document.getElementById("output").textContent = `Sum of first ${n} natural numbers is: ${sum}`;
}

function nestedForLoop() {
  let output = "";
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      output += `${i} x ${j} = ${i * j}\n`;
    }
    output += "\n";
  }
  document.getElementById("output").textContent = output;
}