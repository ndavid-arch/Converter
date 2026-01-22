// convertr js script for currency converter in terminal using Node.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// declare function convert
function converter() {
    rl.question("Enter amount to convert: ", (amountInput) => {
        var amount = parseFloat(amountInput);
        
        rl.question("Enter from currency (e.g., USD): ", (fromInput) => {
            var fromCurrency = fromInput.toUpperCase();
            
            rl.question("Enter to currency (e.g., EUR): ", (toInput) => {
                var toCurrency = toInput.toUpperCase();
                
                // define conversion rates
                const rates = {
                    USD: 1.0,
                    EUR: 0.85,
                    GBP: 0.75,
                    JPY: 110.0,
                    INR: 74.0,
                    RWF: 1000.0
                };
                
                // check if currencies are valid
                if (!rates[fromCurrency] || !rates[toCurrency]) {
                    console.log("Invalid currency code.");
                    rl.close();
                    return;
                }
                
                // perform conversion
                var convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
                // display result
                console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
                rl.close();
            });
        });
    });
}

// Call the converter function
converter();