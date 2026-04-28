//с обратными кавычками можно все
console.log(`Hello 
world`);
console.log(`sum a + b = ${10+20}`);
console.log("Hello \n world!");

let str = "Hello everyone let\'s go";
console.log(str);
console.log(str[10],str.at(10));

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