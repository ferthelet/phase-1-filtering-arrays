// js filter exercise
//

const users = [
    {
        firstName: "Niky",
        lastName: "Morgan",
        favoriteColor: "Blue",
        favoriteAnimal: "Jaguar",
    },
    {
        firstName: "Tracy",
        lastName: "Lum",
        favoriteColor: "Yellow",
        favoriteAnimal: "Penguin",
    },
    {
        firstName: "Josh",
        lastName: "Rowley",
        favoriteColor: "Blue",
        favoriteAnimal: "Penguin",
    },
    {
        firstName: "Kate",
        lastName: "Travers",
        favoriteColor: "Red",
        favoriteAnimal: "Jaguar",
    },
    {
        firstName: "Avidor",
        lastName: "Turkewitz",
        favoriteColor: "Blue",
        favoriteAnimal: "Penguin",
    },
    {
        firstName: "Drew",
        lastName: "Price",
        favoriteColor: "Yellow",
        favoriteAnimal: "Elephant",
    },
];

function blueFilter(collection) {
    for (const user of collection) {
        if (user.favoriteColor === "Blue") {
            console.log(user.firstName);
        }
    }
}

function colorFilter(collection, color) {
    for (const user of collection) {
        if (user.favoriteColor === color) {
            console.log(user.firstName);
        }
    }
}

function attrFilter(collection, attr, value) {
    debugger;
    for (const user of collection) {
        if (user[attr] === value) {
            console.log(user.firstName);
        }
    }
}

console.log("// blue");
blueFilter(users);
console.log("// yellow");
colorFilter(users, "Yellow");
console.log("// penguin");
attrFilter(users, "favoriteAnimal", "Penguin");


// separating the comparison logic (separation of concerns)

function likesJaguar(user) {
    return user.favoriteAnimal === "Jaguar";
}

function filter(collection) {
    for (const user of collection) {
        if (likesJaguar(user)) {
            console.log(user.firstName);
        }
    }
}

console.log("// jaguar");
filter(users);

// using it as a callback

function filterCallback(collection, cb) {
    for (const user of collection) {
        if (cb(user)) {
            console.log(user.firstName);
        }
    }
}

console.log("// jaguar and yellow as cb");
filterCallback(users, likesJaguar);

function likesYellow(user) {
    return user.favoriteColor === "Yellow";
}

filterCallback(users, likesYellow);

console.log("// yellow as inline cb");

filterCallback(users, function (user) {
    return user.favoriteColor === "Yellow";
})

console.log("// Blue as inline arrow fn cb");
filterCallback(users, (user) => user.favoriteColor === "Blue")


// using the Array.filter for Yellow
console.log("// Array.filter = yellow ");
console.log(users.filter((user) => user.favoriteColor === "Yellow"));
