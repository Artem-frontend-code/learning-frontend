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

//Мини проектик создание персонажа - идею подкинули
const nameCharacter = ["Пустота", "Азраил" , "Эларион", "Чапочка", "Астра"];
const nameItem = ["Лук", "Одноручный меч", "Сабля", "Двуручный меч"];
const race = ["Скелет", "Человек", "Вампир"];

function createCharacter () {
  const name = nameCharacter[Math.floor(Math.random() * nameCharacter.length)];
  const item = nameItem[Math.floor(Math.random() * nameItem.length)];
  const characterRace = race[Math.floor(Math.random() * race.length)];
  let character = {
    name: name,
    item: item,
    race: characterRace,
  }
  return character

}
console.log(createCharacter());