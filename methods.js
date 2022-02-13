// .map() method
// .map() method allows me to manipulate the individual elements in the object with functions.

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` ).reverse().join(" ");

console.log(groceryList);

//.filter() allows usto create a new object with particular values
//.filter() filters whatever we pass through it.
//.filter() does not modify the og Obj but creates a new object

const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 === 0 ); //will only pass through even values into the new array 
console.log(evens)