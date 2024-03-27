var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    let currentProfit = 0;
    for(let i = 0;i<prices.length; i++){
        min > prices[i] && (min = prices[i]);
        currentProfit = prices[i] - min;
        profit < currentProfit &&(profit = currentProfit);
    }
    return profit;
};