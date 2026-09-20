

// function wait(ms) {
// return new Promise((resolve) => {
//     setTimeout(resolve,ms);
// });
// }

/*
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
/*
fetch("https://jsonplaceholder.typicode.com/todos/5")
    .then((response) => response.json())
    .then((data) => console.log(data.title))
    .catch((error) => console.log("Ошибка:", error));
*/

// async function countdown() {
//     console.log("3");
//     await wait (1000);
//     console.log("2");
//     await wait (1000);
//     console.log("1");
//     console.log("старт");
// }
// countdown();
const idVideo = 1;
const videos = [
    {
        id: 1,
        title: "Топ 10 игр 2023",
        description: {
            hashTags: ["игры", "2023", "топ"],
            author: {
                id: 55,
                name: "Какие-то уроки",
                shorts: [
                    { id: 10, title: "Секрет 1 игры", views: 1200 },
                    { id: 15, title: "Почему 2023 топ", views: 3400 },
                    { id: 33, title: "Мой топ 3", views: 890 }
                ]
            }
        }
    },
    {
        id: 2,
        title: "Лучшая битва в варкрафт",
        description: {
            hashTags: ["варкрафт", "битва", "wow"],
            author: {
                id: 77,
                name: "Геймер Вася",
                shorts: [
                    { id: 20, title: "Топ момент", views: 15000 },
                    { id: 21, title: "Разбор битвы", views: 7800 }
                ]
            }
        }
    },
    {
        id: 3,
        title: "Чем кормить бомжей",
        description: {
            hashTags: ["лайфхак", "еда", "бомжи"],
            author: {
                id: 99,
                name: "Добрый Саня",
                shorts: [
                    { id: 40, title: "Рецепт 1", views: 500 },
                    { id: 41, title: "Рецепт 2", views: 230 },
                    { id: 42, title: "Бонус", views: 1500 }
                ]
            }
        }
    }
];

//promise1 - запрос всех видео

function getVideo(otherVideos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(otherVideos);
        }, 1000);
    });
}

//promise2 - запросить описание этого видео

function getDescription(video) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(video.description);
        }, 1000);
    })

}

//promise3 - запросить информациб по автору


function getAuthorInfo(authorInfo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(authorInfo);
        }, 1000);
    })

}


//promise4 - получить шортс автора 

function getShortId(shorts) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(shorts[0]);
        }, 1000);
    })

}

getVideo(videos)
    .then((videos) => {
        const firstVideo = videos[idVideo];
        return getDescription(firstVideo);
    })
    .then((description) => {
        const author = description.author;
        return getAuthorInfo(author);
    })
    .then((author) => {
        const shorts = author.shorts;
        return getShortId(shorts);
    })
    .then((short) => {
        console.log(short)
    });

