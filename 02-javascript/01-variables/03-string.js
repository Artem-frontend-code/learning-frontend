//с обратными кавычками можно все
console.log(`Hello 
world`);
console.log(`sum a + b = ${10+20}`);
console.log("Hello \n world!");

let str = "Hello everyone let\'s go";
console.log(str);
console.log(str[10],str.at(10));

//slice со строками тоже работает
let strClone = str.slice();
console.log(strClone, strClone.toUpperCase());

let word = "Abcdsfldfsggldfg";
let newWord ="";
console.log(word.length);
for (let i = 0; i < word.length; i++) {
    
    if (i % 2 === 0) {
        newWord += word[i].toUpperCase();
    } else {
        newWord += word[i];
    }
}
console.log(newWord);

//trim - убирает пробелы и перенос строки
console.log("  okey gg    ".trim());

//padStart - желаемая длина и символ заполнения в начале
console.log("6".padStart(3,"0"));
//padEnd - противоположность
console.log("6".padEnd(3,"0"));

//split - разделяет строку на части в местах, где встречаются заданные фрагменты. Возвращает массив. 
//Чтобы вывести в консоле нужно обязательно выполнить в отдельную переменную

let sentence = "okey hello everyone i so stupid";
let words = sentence.split(" ");
console.log(words);

//join - соединяет строки
console.log(words.join(". хихихи "))

//repeat - повторяет строку заданное количество раз
console.log("HA".repeat(3));