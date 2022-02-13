

//List Reversal .split("").reverse().join("")

const list ="This is an example of random stuff, that I would need to do, that will reveres teh list."

console.log(list.slice(21,-5))
// console.log(list.slice(5).split("").concat(["lm"]).reverse().join(""))

//List reversal
const list1 = list.split("") //splists the list into an array or individual letters

const list2 = list1.reverse()// reverses the array
console.log (list2)

const listFinal = list2.join("")
console.log(listFinal)

const isEqual = (list1, list2) => (list1 === list2);
const isEven = number => (number % 2 === 0);
// console.log(isEqual(listFinal, list2.join("")), list2.join(""))

array = [1,2,3,4,5,6,7,8]

console.log(array.forEach(isEven));
//Join objects .concat("object to be joinded")

//Bubble sort

let array = [1,8,4,11,56,0,5]

