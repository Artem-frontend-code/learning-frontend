//Функции

// Функция тренировочная
function privet(nameUser){
    console.log("Привет, " + nameUser);
    return "Целую в нолик";
}

console.log(privet("Оксана"));

//Функция калькулятора двух чисел

function calculator(x, operator, y){
    switch(operator){
        case "-":
            return x - y;

        case "+":
            return x + y;
        case "*":
            return x * y;
        case "/":
            return x / y;
        case "**":
            return x ** y;
        case "%":
            return x % y;
        default:
            "Иди отсюда н@@@й";
    }
}
console.log(calculator(25,"/",5));

//Функиця наибольшее
function isMax(a,b){
    if (a>b){
        return a
    } else{
        return b
    }
}
console.log(isMax(100,1000));
//Попробую сделать функцию с замыканиями 

function countPow (num) {
    return number = x => {
        let i = num;
        let b = 1;
        while (i > 0) {
            b *= x;
            i--;
            
        }
        return b;

    } 
}

let triple = countPow(3);
console.log(triple(2));



