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

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        for (const suit of suits) {
        for (const face of faces) {
            deck.push(this.createCard(suit, face));
        }
        }
        this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}