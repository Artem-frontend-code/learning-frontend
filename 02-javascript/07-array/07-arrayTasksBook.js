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

//отдыхаю но может быть задание загружу седня

//Массив в обратном порядке

function reverseArray (array) {
    let newArray = [];
    for (let i = 1; i  <= array.length; i++) {
        newArray.push(array[array.length-i]);
    }
    return newArray;
}

console.log(reverseArray([1,2,3,4,5,6,7]));

function reverseArrayInPlace (array) {
    let left = 0;
    let right = array.length-1;

    while (left < right) {
        let temp = array[left]
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
    return array;
    }

    console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8]));
