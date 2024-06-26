const meter = 3.281; // feet
const liter = 0.264; // gallon
const kilogram = 2.204; //pound
const btnEl = document.getElementById("button");
const inputEl = document.getElementById("inputField");
const lengthEl = document.getElementById("lengthConvertion");
const volumeEl = document.getElementById("volumeConvertion");
const kilogramEl = document.getElementById("massConvertion");
const milesEl = document.getElementById("milesConvertion");

inputEl.addEventListener('input', function() {
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3); // Limit input to 3 characters
    }
});

inputEl.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        btnEl.click();
    }
});

button.addEventListener('click', function(){
    const inputValue = inputEl.value;
    const numericValue = +inputValue; //converting the inputValue to a number
    
    const operations = [
        { name: 'Value in feet', func: function(num) { return num * 3.281; } },
        { name: 'Value in meters', func: function(num) { return num / 3.281; } },
        { name: 'Value in gallons', func: function(num) { return num * 0.264; } },
        { name: 'Value in liters', func: function(num) { return num / 0.264; } },
        { name: 'Value in pounds', func: function(num) { return num * 2.204; } },
        { name: 'Value in kilograms', func: function(num) { return num / 2.204; } },
        { name: 'Value in miles', func: function(num) { return num * 1.6093; } },
        { name: 'Value in kilometers', func: function(num) { return num * 0.621; } }
    ];

    const results = []; //stores loop results

    for (let i = 0; i < operations.length; i++) {
        const result = operations[i].func(numericValue);
        results.push(result);
    }

    lengthEl.innerHTML = '';
    volumeEl.innerHTML = '';
    kilogramEl.innerHTML = '';

    lengthEl.innerHTML = `
    ${numericValue} meters = ${results[0].toFixed(3)} feet 
    | ${numericValue} feet = ${results[1].toFixed(3)} meters
    `;

    volumeEl.innerHTML = `
    ${numericValue} liters = ${results[2].toFixed(3)} gallons 
    | ${numericValue} gallons = ${results[3].toFixed(3)} liters
    `;

    kilogramEl.innerHTML = `
    ${numericValue} kilos = ${results[4].toFixed(3)} pounds 
    | ${numericValue} pounds = ${results[5].toFixed(3)} kilos
    `;
    
    milesEl.innerHTML = `
    ${numericValue} miles = ${results[6].toFixed(3)} kilometers 
    | ${numericValue} kilometers = ${results[7].toFixed(3)} miles
    `; 
});
