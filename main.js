document.getElementById('calculate-change').onclick = handleCalculation;

const money = [
    ['onehundreddollars', 100], 
    ['fiftydollars', 50], 
    ['twentydollars', 20], 
    ['tendollars', 10], 
    ['fivedollars', 5], 
    ['dollars', 1], 
    ['quarters', 0.25], 
    ['dimes', 0.1], 
    ['nickels', 0.05], 
    ['pennies', 0.01]
];

function handleCalculation() {
    document.getElementById('error').innerHTML = '';
    document.getElementById('success').innerHTML = '';
    let owed =  parseFloat(document.getElementById('amount-due').value);
    let given = parseFloat(document.getElementById('amount-received').value);
    let change = given - owed;

    if (owed < 0 || given < 0) {
        document.getElementById('error').innerHTML = 'No negative numbers, please!';
        return;
    } else if (change < 0 || isNaN(change)) {
        document.getElementById('error').innerHTML = 'Oops, customer did not give enough money';
        return;
    } else {
        document .getElementById('success').innerHTML = `The customer should receive $${change.toFixed(2)}`;
    }

    for (let i=0;i<money.length;i++) {
        let currChange = Math.floor(change.toFixed(2) / money[i][1]);
        document.getElementById(money[i][0]+"-output").innerHTML = currChange;
        if (currChange != 0) {
            document.getElementById(money[i][0]+"-output").animate([
                {"fontSize":"1em"},
                {"fontSize" :"5em"},
                {"fontSize":"1em"}
            ],500,"swing", () => {return true;});
        }
        change -= currChange*money[i][1];
    }

 }
