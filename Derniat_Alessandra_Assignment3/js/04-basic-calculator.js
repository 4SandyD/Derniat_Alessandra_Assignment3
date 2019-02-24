// USER'S FIRST NUMBER
var num1 = prompt("Enter a number.");

// USER'S SECOND NUMBER
var num2 = prompt("Enter another number.");

// USER'S DESIRED OPERATION
var operation = prompt("Do you want to add, subtract, multiply, or divide the 2 numbers?");

// FUNCTION TO PERFORM OPERATION
function calculate(a, b, c) {
  switch(operation) {
    case "add":
      alert(parseInt(a) + parseInt(b));
      break;
    case "subtract":
      alert(parseInt(a) - parseInt(b));
      break;
    case "multiply":
      alert(parseInt(a) * parseInt(b));
      break;
    case "divide":
      alert(parseInt(a) / parseInt(b));
      break;
    default:
      alert("Ooops! Watch your spelling. You have failed to enter either add, subtract, multiply, or divide.");
      operation = prompt("Do you want to add, subtract, multiply, or divide the 2 numbers?");
      calculate(num1, num2, operation);
  }
}
calculate(num1, num2, operation);



