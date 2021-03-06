//JS for Arithmetic
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var sqrt = function(number1){
  return Math.sqrt(number1);
}

var square = function(number1){
  return number1 * number1;
}

var cbrt = function(number1) {
  return Math.cbrt(number1);
}

var remainder = function(number1, number2) {
  return number1 % number2;
}
 //Jquery front end below
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    } else if (operator === "remainder") {
      result = remainder(number1, number2);
    } else if (operator === "sqrt") {
      result = sqrt(number1);
    } else if (operator === "square") {
      result = square(number1);
    } else if (operator === "cbrt") {
      result = cbrt(number1);
    }
    $("#output").empty().append(result);
  });
});
