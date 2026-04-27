console.log(0.1 + 0.2); //неточности

//Синтаксический сахар _
let million = 1_000_000;

//Запись большых чисел число е и количество нулей
let billion = 1e9;

let ms = 1e-6; //микросекунда

//метод toString(base)
//возвращает число в системе числения base

let num = 255;
console.log( num.toString(16) );
console.log(num.toString(2));
//от 2 до 36 
console.log(255..toString(16));

//Math.floor округление в меньшую сторону
let a = 24.66;
console.log(Math.floor(a));
//Math ceil округление в большую сторону
console.log(Math.ceil(a));
//Math.round округления до ближайшего целого
console.log(Math.round(a));

//метод toFixed(n) округляет число до  n знаков после запятой
console.log(a.toFixed(1)); //это строка
console.log(+a.toFixed(1));

//parseInt и parseFloat
console.log(parseInt('100$'));
console.log(parseFloat("12.35$"));

//у объекта Math много методов
console.log(Math.round(Math.random() * 50));