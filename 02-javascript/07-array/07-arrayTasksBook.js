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

//Список
function arrayToList (array) {
    let list = {value:array[array.length-1], rest:null};
    for (let i = array.length-2; i >= 0; i--) {
        list = {value:array[i], rest:list};
       
    }
    return list;
}

let listik = arrayToList([1,2,3]);

function  listToArray (list) {
    let array = [];
    for (let node=list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend (elem, list) {
    list = {value:elem, rest:list};
    return list;

}

function nth (list,num) {
    if (num > 0) {
    return nth(list.rest, --num);
    } else {
        return list.value;
    }
    
}

console.log(listToArray(listik));
console.log(arrayToList([1,2,3]))//
console.log(nth(listik, 2));
//Глубокое сравнение
function deepEqual (arg1, arg2) {
    if (arg1 === null && arg2 === null){
        return true;
    } else if (arg1 === null || arg2 === null) {
        return false;
    }
    else if (typeof(arg1) != "object" && typeof(arg2) != "object") {
        return arg1 === arg2;
    } else if (typeof(arg1) === "object" && typeof(arg2) === "object") {
        const keys1 = Object.keys(arg1);
        const keys2 = Object.keys(arg2);
        if (keys1.length === keys2.length) {
             for (let i = 0; i < keys1.length; i++){
            if (keys1[i] !== keys2[i] || deepEqual(arg1[keys1[i]], arg2[keys2[i]]) === false) {
                return false;
            }
        }
        return true;
        } else {
            return false;
        }
       
    } else {
        return false;
    }

}

console.log(deepEqual(4,6));

console.log(arrayToList([1,2,3]))
