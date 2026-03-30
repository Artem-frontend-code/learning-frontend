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
// Задание

let getStatistics = function (players) {
  let allGoal = 0 ;
  for (let i = 0; i < players.length; i++) {
    players[i].coefficient = players[i].goals * 2 + players[i].passes;
    allGoal += players[i].goals;
  }
  for (let j = 0; j < players.length; j++) {
    players[j].percent = Math.round((players[j].goals * 100) / allGoal)
  }
  return players
};

console.log(getStatistics([{"name":"Васька","goals":3,"passes":2},{"name":"Байт","goals":10,"passes":1},{"name":"Снежок","goals":2,"passes":14}]));