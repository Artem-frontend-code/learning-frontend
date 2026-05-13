const user = new Map();

user.set("name", "Ivan");
user.set("age", 25);
console.log(user);


const userSet = new Set();
userSet.add("Artem");
userSet.add("Arttem");
userSet.add("Artem");
console.log(userSet);

let admin = {
    name: "admin"
}

const weakMap = new  WeakMap();

weakMap.set(admin, "data");
admin = null;
console.log(weakMap);