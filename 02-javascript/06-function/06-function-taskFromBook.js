//Задание 1 - создать самому функцю Math.min
function minNum (num1, num2) {
    if (num1 > num2) {
        return num2
    } else {
        return num1
    }
}
console.log(minNum(10,100));