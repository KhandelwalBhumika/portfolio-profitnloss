const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");


submitBtn.addEventListener("click", submitHandler);


function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}


function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;


        showOutput("Hey, the loss is " + loss.toFixed(2) + " and the loss percentage is " + lossPercentage.toFixed(2) +
            "%.😭");

    } else if (initial < current) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput("Hey, the profit is " + profit.toFixed(2) + " and the profit percentage is " + profitPercentage.toFixed(2) + "%.🤗")

    } else {
        showOutput("There is no profit, no loss.😐")
    }
}


function showOutput(message) {
    outputBox.innerHTML = message;
}