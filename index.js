//String & Reverse
function reverseString(){
    let code = document.querySelector("#code").value;
    console.log(document.querySelector("#code").value);
    let reverseString ="";
    for (let i = code.length - 1; i >= 0; i--) {
        reverseString += code[i];
    }
    console.log(reverseString);
    document.querySelector("#codeResult").innerText = "Reverse My Code: " + reverseString;
    document.querySelector("#codeResult").style.color = "Red";
}


//Series of Numbers & Palindrome
function palindromeYesOrNo(){
    let seriesNumbers = document.querySelector("#seriesNumbers").value;
    let x = seriesNumbers.length;
    for (let i = 0; i < x/2; i++) {
    if (seriesNumbers.charAt(i) === seriesNumbers.charAt(x - 1 - i)){
        document.querySelector("#seriesNumbersResult").innerText = seriesNumbers + " is palindrome";
    }else {
        document.querySelector("#seriesNumbersResult").innerText = seriesNumbers + " is not palindrome";
    }
    document.querySelector("#seriesNumbersResult").style.color = "Red";
}
}

//Subtotal of the Bill
function tip(){
    let subtotal = parseFloat(document.querySelector("#subtotalOfTheBill").value);
    let percentageOfTip = document.querySelector("#tips").value;
    let amountOfTip = subtotal * (percentageOfTip/100);
    const result = parseFloat(amountOfTip + subtotal);
    console.log(totalAmountResult);
    document.querySelector("#totalAmountResult").innerText = "Total Amount: " + result;
    document.querySelector("#totalAmountResult").style.color = "Red";
}

