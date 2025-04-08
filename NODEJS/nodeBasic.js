// ~~~~~ Blocking Code ~~~~~~~~~~~
// const getUserAsync = (userId) => {
//     const users = {
//         1: {name: "Sandeep Yadav", age: 21},
//         2: {name: "Aman Yadav", age: 20}
//     }

//     return users[userId];
// }

// const user = getUserAsync(1);

// console.log(user);


// ~~~ Non Blocking Code ~~~~~~~

const getUserAsync = (userId, callback) => {
    const users = {
        1: {name: "Sandeep Yadav", age: 21},
        2: {name: "Aman Yadav", age: 20}
    };

    setTimeout(() => {
        callback(users[userId])
    }, 1000);
};

const printUser = (user) => {
    console.log(user)
}

// getUserAsync(2, (user) => {
//     console.log(user);
// })

getUserAsync(1, printUser)