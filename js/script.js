const request = prompt("Enter your number");

if (request === null) {
  alert("You Canceled");
} else if (!request.trim()) {
  alert("You entered nothing");
} else if (isNaN(request)) {
  alert("You entered not a number ");
} else {
  const number = Number(request);
  let isPrime = true;

  if (number <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    alert(`The number ${number} is a prime number.`);
  } else {
    alert(`The number ${number} is not a prime number.`);
  }
}
