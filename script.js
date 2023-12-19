// Converts a temperature from Celsius to Fahrenheit
function CelsiusToFahrenheit(){
    var value = parseFloat(prompt("Enter Celsius value"));
    var result = (value * 9/5) + 32;
    result = result.toFixed(2);
    document.write(value + " degrees Celsius is " + result + " degrees Fahrenheit."); 
}

// Converts a length from inches to centimeters
function InchesToCentimeters(){  
    var value = parseFloat(prompt("Enter Inch value"));
    var result = (value * 2.54);
    result = result.toFixed(2);
    document.write(value + " Inches convereted to Centimeters are " + result + " centimeters.");
}

// Converts a weight from pounds to kilograms
function PoundsToKilograms(){

    var value = parseFloat(prompt("Enter Pound value"));
    var result = (value * 0.45359237);
    result = result.toFixed(2);
    document.write(value + " Pounds converted to Kilograms are " + result + " Kilograms.");
}