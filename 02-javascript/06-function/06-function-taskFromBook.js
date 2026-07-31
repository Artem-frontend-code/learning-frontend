//Задание 1 - создать самому функцю Math.min
function minNum (num1, num2) {
    if (num1 > num2) {
        return num2
    } else {
        return num1
    }
}
console.log(minNum(10,100));

//Задание 2 - рекурсия 
function isEven (num) {
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else if (num >= 0) {
        return isEven(num-2);
    } else {
        return isEven(num+2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Задание 3 - подсчет букв

function countBs (string) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            count++;
        }
    }
    return console.log(count);
}

countBs("BaaBaB");

function countChar (string, char) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return console.log(count);
}

countChar("AAssSSS", "A")

//Пока начну делать задания, а потом буду разбираться в книге этой
//Высшие функции
//Глава 5 - задание 1
let testArray = [[1,4,6],[7,10,24],[55,1,3]];
console.log(testArray.reduce((a,b) => a.concat(b)));
//Задание 2

function loop(value,condition, changeValue, bodyLoop) {
    for (value; condition(value); value=changeValue(value)) {
        bodyLoop(value);
    }

}
loop( 3, (value) => value < 10, (value) => ++value, (value) => console.log(value));


function myEvery (arr, userFunc) {
    let b = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if(userFunc(arr[i])) {
            b++;
        }
    }
    if (b === arr.length) {
        console.log(true);
    } else {
        console.log(false);
    }

}

myEvery([1,2,-1], n => n > 0);

function myEverySome (arr, userFunc) {
    if (arr.some(m =>!userFunc(m))) {
        console.log(false);
    } else {
        console.log(true);
    }

}

myEverySome([1,2,-5], n => n > 0);

//снизу задание пришлось к сожалению списать, потом буду разбиратсья кое каким способом, а код потом рабочим сделаю с новым функциями
/*
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
*/
