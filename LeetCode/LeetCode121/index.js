function sellStock(prices){
    let min = prices[0];
    let max = prices[0];
    for(let i = 0;i<prices.length; i++){
        if(min > prices[i]){
            min = prices[i];
            max = prices[i];
        }
        else{
            if(max < prices[i]){
                max = prices[i];
            }
        }
    }
    console.log('min',min,' | max',max)
    return max - min;
}