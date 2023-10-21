//String & Reverse
function reverseString(){
    let checkingNumbers = document.querySelector("#checkingNumbers").value;
    console.log(document.querySelector("#checkingNumbers").value);
    let reverseString ="";
    for (let i = checkingNumbers.length - 1; i >= 0; i--) {
        reverseString += checkingNumbers[i];
    }
    console.log(reverseString);
    document.querySelector("#checkingNumbersResult").innerText = "Reverse My Checking Numbers:" + reverseString;
}
console.log(reverseString());


//Series of Numbers & Palindrome
function palindrome(){
    let seriesNumbers = document.querySelector("#seriesNumbers").value;
    console.log(document.querySelector("#seriesNumbers").value);
    let 
}






//Subtotal of the Bill
function subtotal(){
    let numbersOfLunchbox = document.querySelector("#numbersOfLunchbox").value;
    console.log(document.querySelector("#numbersOfLunchbox").value);
    var subtotal = numbersOfLunchbox * 15;
    
    var taxes = Subtotal * 0.0875;
    var totalAmount = Subtotal + taxes;

    console.log(subtotal);
    document.querySelector("#numbersOfLunchbox").innerText = "Subtotal: " + subtotal;

console.log(subtotal());

    console.log(taxes);
document.querySelector("#numbersOfLunchbox").innerText = "Taxes: " + taxes;

    console.log(totalAmount);
document.querySelector("#numbersOfLunchbox").innerText = "Total Amount: " + totalAmount;
}

console.log(subtotal());
console.log(taxes());
console.log(totalAmount());

