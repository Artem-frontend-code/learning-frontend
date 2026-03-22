//Цикл while - выполняется пока условие истинно
let i = 0
while (i < 3){ //3 не включительно
    console.log(i);
    i++;
}

//Цикл do while - сначало тело, потом условие. Даже если ложно то один раз выполнит
let x = 0;
do{
    console.log(x);
    x++
} while (x < 3);

//Цикл for - выполняет циксл заданное число раз. Начало, условие, шаг
for (let y=0;y-1<3;y++){ //3 включительно потому что y-1
    console.log(y)
}

//break - прекращает выполнение цикла полностью
let b = 0;
while(true){ 
    b++;
    if (b == 10) break;
}
console.log(b);

//contune - цикл не прерывается, а переходит к следующей итерации (если условие все ещё равно true).
for (let n = 0; n < 10; n++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (n % 2 == 0) continue;

  console.log(n); 
}

//Задания 
//Задание 1:При помощи цикла for выведите чётные числа от 2 до 10.
for (let a=2; a<=10; a++ ){
    if (a%2==0){
        console.log(a);

    }
}

//Задание 2:Перепишите код, заменив цикл for на while, без изменения поведения цикла.
/*
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
let p=0;
while(p < 3){
    console.log(`number ${p}`);
    p++;
}

//Задание 3:Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
/*
let userNumber;
do{
    userNumber=prompt("Введите число",0);
} while (userNumber<=100 && userNumber);
*/
//Задание 4:Напишите код, который выводит все простые числа из интервала от 2 до n.
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  console.log( i ); // простое число
}
//не понял че то как метки работают и перепишу код

//Задание 5:Напишите цикл, который делает семь вызовов console. log и выводит сле­дующий треугольник:
/*
#
##
###
#### и тд до 7 в ширину
*/
let count7=0;
let StringSize="";
while (count7 < 7){
    StringSize+="#"; //нашел подсказку
    console.log(StringSize);
    count7++;
}

//Задание 6: FizzBuzz

for (let FuzzBuzzCount = 1; FuzzBuzzCount <=100; FuzzBuzzCount++){
    if (FuzzBuzzCount % 3 === 0){
        if (FuzzBuzzCount % 5 ===0){
            console.log("FizzBuzz")
        } else{
            console.log("Fizz")
        }

    } else if (FuzzBuzzCount % 5 === 0 && FuzzBuzzCount % 3 !== 0){
        console.log("Buzz")
    }  else{
        console.log(FuzzBuzzCount)
    }

}