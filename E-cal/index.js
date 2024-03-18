
// function add(a, b) {
//     return a + b;
// }


// function subtract(a, b) {
//     return a - b;
// }


// function multiply(a, b) {
//     return a * b;
// }


// function divide(a, b) {
//     if (b !== 0) {
//         return a / b;
//     } else {
//         return "can't Division by zero!";
//     }
// }


// document.write("Addition: " + add(5, 3))
// document.write("<br>")
// document.write("Subtraction: " + subtract(5, 3))
// document.write("<br>")
// document.write("Multiplication: " + multiply(5, 3))
// document.write("<br>")
// document.write("Division: " + divide(5, 3))
// document.write("<br>")
// document.write("Division: " + divide(5, 0))


function sum(){
    var first=parseInt(document.getElementById('first').value);
    var secound=parseInt(document.getElementById('secound').value);
    var Result=first+secound;
    document.getElementById("data").innerHTML="Result is = "+Result;
  }
  function sub(){
    var first=parseInt(document.getElementById('first').value);
    var secound=parseInt(document.getElementById('secound').value);
    var Result=first-secound;
    document.getElementById("data").innerHTML="Result is = "+Result;
  }
  function mul(){
    var first=parseInt(document.getElementById('first').value);
    var secound=parseInt(document.getElementById('secound').value);
    var Result=first*secound;
    document.getElementById("data").innerHTML="Result is = "+Result;
  }
  function div(){
    var first=parseInt(document.getElementById('first').value);
    var secound=parseInt(document.getElementById('secound').value);
    var Result=first/secound;
    document.getElementById("data").innerHTML="Result is = "+Result;
  }