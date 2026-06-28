//Сумма диапазона 
const range = function (start, end, step) {
    if(!step){
        step = start > end ? -1 : 1;
    }
    let results = [];
    for (start;  (end - start) * step >= 0; start+=step) {
        results.push(start);
    }
    
    return results;
}

const sum = function (numbers) {
    let sumNumbers = 0;
    for(let num of numbers) {
        sumNumbers += num;
    }

    return sumNumbers;
}
console.log(range(10,1,-1));