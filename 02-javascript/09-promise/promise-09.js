
/*
function wait(ms) {
return new Promise((resolve) => {
    setTimeout(resolve,ms);
});
}

wait(0)
    .then (() => {
        console.log("3");
        return wait(1000);
    })
    .then (() => {
        console.log("2");
        return wait(1000);
    })
    .then (() => {
        console.log("1");
        console.log("старт");
    });
*/
/*
const promise = new Promise ((resolve, reject) => {
    const age = 15;
    setTimeout(() => {
        if(age < 18) {
            reject("ты малыш иди на***");
        } else {
            resolve("проходи чемпион");
        }
    }, 1000);
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
*/
fetch("https://jsonplaceholder.typicode.com/todos/5")
    .then((response) => response.json())
    .then((data) => console.log(data.title))
    .catch((error) => console.log("Ошибка:", error));