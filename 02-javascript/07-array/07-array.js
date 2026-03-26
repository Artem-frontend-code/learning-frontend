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