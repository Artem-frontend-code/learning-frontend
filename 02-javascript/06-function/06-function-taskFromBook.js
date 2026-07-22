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
// z jnls[f. vyt gj[eq z pft,fkcz]]
function loop(value,condition, changeValue, bodyLoop) {
    for (value; condition(value); value=changeValue(value)) {
        bodyLoop(value);
    }

}
loop( 3, (value) => value < 10, (value) => ++value, (value) => console.log(value));
//gdgdgffdgddjfdjfd