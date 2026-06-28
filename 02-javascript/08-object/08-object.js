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

// Задание 1

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

//Задание 2

let materialPrice = {
  'wood': 1000,
  'stone': 1500,
  'brick': 2000
};

let house = {
  rooms: 10,
  floors: 5,
  material: 'wood',
  coefficient: 10.5,
  calculateSquare() {
    return this.rooms * this.coefficient * this.floors
  },
  
  calculatePrice () {
    return this.calculateSquare() * materialPrice[this.material]
  }
};

console.log(house.calculatePrice());

function User(name, age) {
  this.name = name;
  this.age = age;

}

let user1;
user1 = new User("gdgd", 20)
console.log(user1);

let users = [];
users.push(new User("Artem", 25));
users.push(new User("Vova", 95));
console.log(users);



//=== Объект Math ===
console.log(Math.max(5,19,90), "max number");
console.log(Math.min(5,19,90), "min number");
console.log(Math.sqrt(25), "корень числа");
console.log(Math.PI);
//a также sin, cos, asin ,acos ,tan ,atan
//random
console.log(Math.random());

//Math.floor округление в меньшую сторону
let a = 24.66;
console.log(Math.floor(a));
//Math ceil округление в большую сторону
console.log(Math.ceil(a));
//Math.round округления до ближайшего целого
console.log(Math.round(a));
//абсолютное значение, делает любое число положительным
console.log(Math.abs(-100));