// let x = 1;
// let y = 2;
// let z = 3;
// console.log(x + x);
// console.log(y - z);
// console.log(z * x);

// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//         const name = names[index];

//         console.log(name + ' was found at index ' + index);
//     }
// }
//     actuallyPrintingNames();
// }
// printNames(beatles);

// class Deck {
//     constructor() {
//         const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//         const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//         const deck = [];
//         for (const suit of suits) {
//         for (const face of faces) {
//             deck.push(this.createCard(suit, face));
//         }
//         }
//         this.deck = deck;
//     }
//     createCard(suit, face) {
//         return face + " of " + suit;
//     }
// }

const exampleFunction = (message) => console.log( message );

exampleFunction('Testing out Arrow Functions, Callback functions!');

isEven = number => number % 2 === 0 ;

arrayTest = [2,2,4,8,6].every(isEven)

console.log(arrayTest)

const arr = object.freeze([1,2,3,4]);
arr.push(300);  //object is not extensible

const groceryList = [
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
];

nuarr =[...groceryList, {"item": "pepper", "haveIngredient": true}]
const needThyme = groceryList.join( '[ { "item": "thyme", "haveIngredient": false } ]');

console.log(needThyme, groceryList)

//