//Мини проектик создание персонажа - идею подкинули
const nameCharacter = ["Пустота", "Азраил" , "Эларион", "Чапочка", "Астра"];
const nameItem = ["Лук", "Одноручный меч", "Сабля", "Двуручный меч"];
const weapons = {
  Лук: 1,
  "Одноручный меч": 5,
  "Двуручный меч": 10,
  Сабля: 4,
}


const race = ["Скелет", "Человек", "Вампир"];


function createCharacter () {
  const item = nameItem[Math.floor(Math.random() * nameItem.length)];
  const name = nameCharacter[Math.floor(Math.random() * nameCharacter.length)];
  
  const characterRace = race[Math.floor(Math.random() * race.length)];
  const damage = weapons[item];
  let character = {
    name: name,
    item: item,
    race: characterRace,
    level: 1,
    damage: damage,
    health: function () {
      return this.level * 10
    } ,

    getCharacter() {
        return `
        Имя: ${this.name}
        Оружие: ${this.item}
        Раса: ${this.race}
        Уровень: ${this.level}
        Урон: ${this.damage}
        `
    }
  }
  if (character.name === "Чапочка"){
    character.damage = 999;
  }
  return character

}

function dual (first, second) {
  if (first.damage > second.damage) {
    first.level += 1;
    console.log(first.name + " ПОБЕДИЛ!!");
  } else if (first.damage < second.damage) {
    second.level += 1;
    console.log(second.name + " ПОБЕДИЛ!!");
  } else {
    console.log("Нужен реванш!");
  }


}

let hero1 = createCharacter();
let hero2 = createCharacter();
console.log(hero1.getCharacter());
