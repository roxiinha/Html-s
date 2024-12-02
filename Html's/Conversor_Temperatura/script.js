function convertTemperature() {
    var temperature = parseFloat(document.getElementById("inputTemperature").value);
    var unit = document.getElementById("unitSelector").value;
    var resultElement = document.getElementById("result");
    var convertedTemperature;
  
    if (unit === "celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
      resultElement.textContent = temperature + " Celsius = " + convertedTemperature.toFixed(2) + " Fahrenheit";
    } else if (unit === "fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
      resultElement.textContent = temperature + " Fahrenheit = " + convertedTemperature.toFixed(2) + " Celsius";
    }
  }
  