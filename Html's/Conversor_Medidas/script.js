function convert() {
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var resultElement = document.getElementById("result");
    var convertedValue;
  
    // Conversions
    if (fromUnit === "cm" && toUnit === "m") {
      convertedValue = inputValue / 100;
    } else if (fromUnit === "cm" && toUnit === "km") {
      convertedValue = inputValue / 100000;
    } else if (fromUnit === "cm" && toUnit === "inch") {
      convertedValue = inputValue * 0.393701;
    } else if (fromUnit === "cm" && toUnit === "foot") {
      convertedValue = inputValue * 0.0328084;
    } else if (fromUnit === "m" && toUnit === "cm") {
      convertedValue = inputValue * 100;
    } else if (fromUnit === "m" && toUnit === "km") {
      convertedValue = inputValue / 1000;
    } else if (fromUnit === "m" && toUnit === "inch") {
      convertedValue = inputValue * 39.3701;
    } else if (fromUnit === "m" && toUnit === "foot") {
      convertedValue = inputValue * 3.28084;
    } else if (fromUnit === "km" && toUnit === "cm") {
      convertedValue = inputValue * 100000;
    } else if (fromUnit === "km" && toUnit === "m") {
      convertedValue = inputValue * 1000;
    } else if (fromUnit === "km" && toUnit === "inch") {
      convertedValue = inputValue * 39370.1;
    } else if (fromUnit === "km" && toUnit === "foot") {
      convertedValue = inputValue * 3280.84;
    } else if (fromUnit === "inch" && toUnit === "cm") {
      convertedValue = inputValue * 2.54;
    } else if (fromUnit === "inch" && toUnit === "m") {
      convertedValue = inputValue * 0.0254;
    } else if (fromUnit === "inch" && toUnit === "km") {
      convertedValue = inputValue * 0.0000254;
    } else if (fromUnit === "inch" && toUnit === "foot") {
      convertedValue = inputValue * 0.0833333;
    } else if (fromUnit === "foot" && toUnit === "cm") {
      convertedValue = inputValue * 30.48;
    } else if (fromUnit === "foot" && toUnit === "m") {
      convertedValue = inputValue * 0.3048;
    } else if (fromUnit === "foot" && toUnit === "km") {
      convertedValue = inputValue * 0.0003048;
    } else if (fromUnit === "foot" && toUnit === "inch") {
      convertedValue = inputValue * 12;
    } else {
      resultElement.textContent = "Erro: Unidades inválidas.";
      return;
    }
  
    resultElement.textContent = inputValue + " " + fromUnit + " = " + convertedValue.toFixed(2) + " " + toUnit;
  }
  