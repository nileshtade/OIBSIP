function convertTemperature() {
    // taking input from user
    let temperature = parseFloat(document.getElementById('temperature').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;

    // Checking here the input is valid number
    if (isNaN(temperature)) {
      alert('Please enter a valid number for temperature.');
      return;
    }

    // Performing conversion
    let result;
    switch (inputUnit) {
      case 'fahrenheit':
        result = {
          celsius: (temperature - 32) * (5 / 9),
          kelvin: (temperature - 32) * (5 / 9) + 273.15
        };
        break;
      case 'celsius':
        result = {
          fahrenheit: (temperature * 9 / 5) + 32,
          kelvin: temperature + 273.15
        };
        break;
      case 'kelvin':
        result = {
          fahrenheit: (temperature - 273.15) * 9 / 5 + 32,
          celsius: temperature - 273.15
        };
        break;
    }

    // Display the result
    document.getElementById('result').innerHTML = `
      Result in ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}:
      ${result[outputUnit].toFixed(2)}°${outputUnit.charAt(0).toUpperCase()}
    `;
  }