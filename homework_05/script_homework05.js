/*Задача 1*/

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }

// for (const key in numbers) {
//     numbers[key] >= 3 ? console.log(numbers[key]) : console.log();
// }

/*Задача 2*/

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [{
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);

/*Задача 3*/

// const products = [{
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach(element => {
//     console.log(element.price *= 0.85);

// });

/*Задача 4*/

// const products = [{
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];

// console.log(products.filter(product => 'photos' in product &&
//     product.photos.length !== 0));
// console.log(products.sort((product1, product2) =>
//     product1.price - product2.price));

/*Задача 5*/

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// const getObject = (array1, array2) => {
//     if (array1.length == array2.length) {
//         const daysOfWeek2 = {};
//         for (let i = 0; i < en.length; i++) {
//             daysOfWeek2[array1[i]] = array2[i];
//         }
//         return daysOfWeek2
//     } else return 'Массивы не равны';
// }

// console.log(getObject(en, ru));