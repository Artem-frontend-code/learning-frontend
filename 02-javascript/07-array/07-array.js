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

// Закодированное сообщение
let encodedSymbols = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

// Раскодированное сообщение
let decodedMessage = '';

for (let i = 0; i < encodedSymbols.length; i++) {
  decodedMessage += symbols[encodedSymbols[i]];
}

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

//find
console.log(usersByDay.find(item => item === 4));

//findIndex
console.log(usersByDay.findIndex(item => item === 'Удалено'));

let first = [2, 4, 5, 6];
let testArr = first.map ((elem) => {return elem ** 2});
console.log(testArr);