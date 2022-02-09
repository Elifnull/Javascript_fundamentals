//Problem 1:
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

///prediction1:  "Tesla" "Mercedes"

//Problem 2:
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); //produces a reference error at runtime
console.log(otherName);

//Prediction2: null or undefined Refference error, "Elon"

//Problem 3:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword); //typeError: of undefined or null

//Prediction3: "12345" and typeError of undefined

//Problem 4:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); //this is a comparison, nets a bool
console.log(first == third); //This is a comparison, nets a bool

//Prediction4: False, True


//Problem 5:
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //'value'
const { secondKey } = lastTest; //whole array
const [ ,willThisWork] = secondKey; // no this will not work...I was wrong!
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork); //this actually worked, I need to be more attentive

//Prediction 5: 'value', [1,5,1,8,3,3], 1, undefined
