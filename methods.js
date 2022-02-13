// map() method
// map() method allows me to manipulate the individual elements in the object with functions.

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` ).join(' ');

console.log(groceryList);