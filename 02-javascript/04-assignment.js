//нулевое слияние ??
//оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.
let user;
console.log(user ?? "Аноним")

let nameUser="Alex";
console.log(nameUser ?? "Anonim");

//Задания 
//Задание 1
//Перепишите этот код используя операторы нулевого слияния и присваивания.
/*
let num1 = 10,
    num2 = 20,
    result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}
*/
let num3 = 10, num4 = 20, result;
result ??= num3 ?? num4;
console.log(result);