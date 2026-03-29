const userStat = {
    name: "Иван",
    age: 21,
    email: "666death666@gmail.com",
    isSmoking: true,
}
console.log(userStat);
userStat.isSmoking = false;
delete userStat.email;
console.log(userStat);

for (let key in userStat) {
    console.log( userStat[key] );
}