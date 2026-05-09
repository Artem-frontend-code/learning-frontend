//Мини проектик создание персонажа - идею подкинули
const nameCharacter = ["Пустота", "Азраил" , "Эларион", "Чапочка", "Астра"];
const nameItem = ["Лук", "Одноручный меч", "Сабля", "Двуручный меч"];
const weapons = {
  Лук: 1,
  "Одноручный меч": 5,
  "Двуручный меч": 10,
  Сабля: 4,
}

const race = [
  { bonusDamage: 10, bonusHealth: 0, name: 'Скелет' },
  { bonusDamage: 0, bonusHealth: 20, name: 'Человек' },
  { bonusDamage: 5, bonusHealth: 10, name: 'Вампир' },
  { bonusDamage: 5, bonusHealth: 30, name: 'Оборотень'},
];


function createCharacter () {
  const item = nameItem[Math.floor(Math.random() * nameItem.length)];
  const name = nameCharacter[Math.floor(Math.random() * nameCharacter.length)];
  
  const characterRace = race[Math.floor(Math.random() * race.length)];
  const damage = weapons[item];

  let character = {
    name: name,
    item: item,
    race: characterRace.name,
    level: 1,
    damage: damage + characterRace.bonusDamage,
    health: function () {
      return this.level * 10 + characterRace.bonusHealth
    } ,

    getInfo() {
        return `
        Имя: ${this.name}
        Оружие: ${this.item}
        Раса: ${this.race}
        Уровень: ${this.level}
        Урон: ${this.damage}
        Здоровье: ${this.health()}
        `
    },
    upLevel() {
      this.level++;
      return `${this.name} потренировался и теперь его уровень ${this.level}`
    }
  }
  if (character.name === "Чапочка"){
    character.damage = 999;
    character.level = 999;
  }
  return character

}

function dual (first, second) {
  let firstHealth = first.health();
  let secondHealth = second.health();
  while(firstHealth > 0 && secondHealth > 0) {
    firstHealth -= second.damage;
    secondHealth -= first.damage;
    if (secondHealth <= 0) {
      first.level++;
      return `${first.name} выиграл!`;
      
    } else {
      second.level++;
      return `${second.name} выиграл!`;
      
    }
  }


}

let hero1 = createCharacter();
let hero2 = createCharacter();
console.log(hero1.getInfo());
console.log(dual(hero1, hero2));
