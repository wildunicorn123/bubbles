// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
let fahrenheit = ((temperature*(9/5))+32) +'\u00B0 F';
return fahrenheit;
}

  // Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
 let celsius = ((temperature - 32)*(5/9)) + '\u00B0 C';
 return celsius;
}

  // Prompt the user for input
let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
let temperature = parseFloat(prompt("Enter the temperature:"));

if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    document.getElementById("result").innerHTML =  celsiusToFahrenheit() ;
 }else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    document.getElementById("result").innerHTML = fahrenheitToCelsius() ;
} else {
    alert("Invalid conversion type.");
}