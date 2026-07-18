let nameUser = ["Alex", "Olga", "Artem", "Pridurok"];
console.log(nameUser);

for (let i=0; i < nameUser.length; i++){
    console.log(nameUser[i]);
}

let userMoney = [1000, 1245 ,13245 ,123 , 456, 456,];

function sumMoney (moneyArr) {
    let sum = 0;
    for (let i = 0; i < moneyArr.length; i++){
        sum +=moneyArr[i];
    }
    return sum;
}
console.log( sumMoney(userMoney) );
console.log( sumMoney([1000, 1245 ,13245 ,123 , 456, 456,]) );


//Задание 1
// Алфавит
let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Смещение
let shift = 10;

// Закодированное сообщение
let encodedSymbols = [8, 28, 36, 52, 56, 40, 23, 31, 56, 39, 38, 28, 48, 52, 58, 56, 38, 27, 32, 37, 56, 40, 23, 31, 56, 39, 38, 41, 39, 32, 57];

// Раскодированное сообщение
let decodedMessage = '';

for (let i = 0; i < encodedSymbols.length; i++) {
  if((encodedSymbols[i] + 10) >symbols.length) {
    decodedMessage+=symbols[(encodedSymbols[i]+shift)-symbols.length]; 
  } else {
     decodedMessage+=symbols[encodedSymbols[i]+shift];
  }
  
}
// бля пацаны правда простите меня, я все выгружу скоро, щас книгу читаю

//Задание 2
let numberArr = [123, 324, 765756, 1243,1 ,32 ,4 ,56 ,9 ,6 ,34 ,877 ,345];
let minNum = 99999;

for (let i = 0; i < numberArr.length; i++){
    if (numberArr[i] < minNum) {
        minNum = numberArr[i];

    }
}
console.log(minNum);

//Задание 3 - сортировка - разобрать еще раз
let usersByDay = [5, 4, 3, 2, 1, 0];
console.log(usersByDay);

for (let i = 0; i < usersByDay.length; i++) {
  let minValue = usersByDay[i];

  for (let j = i; j < usersByDay.length; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      let swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}
console.log(usersByDay);

//добавляет элемент в конец
 usersByDay.push(5);

//извлекается элемент из конца
usersByDay.pop();
console.log(usersByDay);

//извлекает элемент из начала
usersByDay.shift()
console.log(usersByDay);

//добаляет элемент в начало
usersByDay.unshift(0);
console.log(usersByDay);

//метод splice 
//arr.splice(start, deleteCount, elem1, ..., elemN)
usersByDay.splice(1, 2, "Удалено", "Тоже удалено");
console.log(usersByDay);

//forEach - arr.forEach(function(item, index, array) {});
//usersByDay.forEach(a => { console.log(a);});

//indexOf и include 
console.log(usersByDay.indexOf(5));

let getDocumentsNumbers = function (name, year) {
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i].indexOf(year,4) > 0) {
      count++;
      }
  }
  return count;
}
console.log("Документов",getDocumentsNumbers(["01112018","20092017","05102017","12052018","04072005","02022018"],2018));

//find
console.log(usersByDay.find(item => item === 4));

//findIndex
console.log(usersByDay.findIndex(item => item === 'Удалено'));

//map возвращает массив с указанными изменениями
let first = [2, 4, 5, 6];
let testArr = first.map ((elem) => {return elem ** 2});
console.log(testArr);

for (let i of first) {
  console.log(i);

}

//concat 
let oneArr = [2,3];
let twoArr = ["6", 6];
console.log(oneArr.concat(7));

//reduce
console.log([1,2,3,4].reduce((a,b) => a*b));

//многоточие в функциях или массивах
let smallArr = [5,9,8,3,10];
console.log(Math.max(5,4,8,9));
//развертывает массив
console.log([5,6,...smallArr,666]);
//принимает любое количество цифр и упаковывает их в массив
function max (...numbers) {
    let i = -Infinity;
    //of дает значение сразу
    for (let x of numbers) {
      if (x > i) {
        i = x;
      }
    }
    return i;
}
console.log(max(11,5,88,0,99));
//Задание с числами Фибоначчи
let fibonacciNumbers = [1, 1];
let numbersQuantity = 7;
for (let i = 0; i< numbersQuantity; i++) {
  num = fibonacciNumbers[i] + fibonacciNumbers[i+1];
  fibonacciNumbers.push(num);

}
console.log(fibonacciNumbers);

