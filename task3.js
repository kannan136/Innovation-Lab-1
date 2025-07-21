function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findFirstPrime() {
  let output = "Checking numbers for the first prime...\n";
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      output += `First prime number found: ${i}`;
      break;
    }
  }
  document.getElementById("output").textContent = output;
}

function printOddNumbers() {
  let output = "Odd numbers between 1 and 20:\n";
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) continue; // Skip even numbers
    output += i + " ";
  }
  document.getElementById("output").textContent = output;
}
