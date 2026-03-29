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

//Функция скидки 
/*
function discont(price, procent){
    return price - ((price/100) * procent);
}
console.log(discont(1000, 20));
*/

//Функция скидки стрелочная

let discont = (price, procent) => price - price / 100 * procent;
console.log( discont(1000, 50) )

//Функция каллорий
/*
let gender=prompt("Введите М - мужчина или Ж - женщина", "");
let weight=+prompt("Введите свой вес", "");
let height=+prompt("Введите свой рост");
let age=+prompt("Введите свой возраст");
let AMR = +prompt("1.2 - сидячий образ жизни,\n 1.375 - тренировки 1-3 раза в неделю,\n 1.55 - 3-5 раза в неделю,\n 1.9 - тренировка чаще раза в день");

const calori = () => {
    if (gender == "М"){
        return (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age))*AMR;
    } else{
        return AMR*(447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age))
    }
}
alert( calori() );
*/

// ставка в час если срочно или не срочный проект
let getPrice = function (time, isSrochno) {
  let bet = 1500;
  if (isSrochno === true) {
    time /= 2;
    bet *= 2.5;
  }
  if (time > 150) {
    bet -= 250;
  }
  return time * bet
}

