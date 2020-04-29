// Variables and data types
//Numbers

//Declare a variable called age and give it a value of your age.

let age = 28

//Declare a variable called showMeSix and give it a value of 3 + 3.  We can perform math operations on numbers.

let showMeSize = 3 + 3

//Strings
//Declare a variable called name and give it a value of your name.

let myName = 'Jeff'

//Declare a variable called greeting and give it a value of a nice greeting.  Use either template strings or concatenation to add your name to the end of the greeting.

let templateGreeting = `Hello! Me llamo ${myName}`

let greeting = 'Have nice day.'

let myGreeting = myName + greeting

//Booleans
//Declare a variable called lovesCode and give it a value of a boolean.

const lovesCode = true

console.log(lovesCode)

//Arrays
//Declare a variable called friends and give it a value of an array containing 3 strings, each one a name of a friend.
//Console.log the first item in your array

let friends = ['Fake friend 1', 'Fake friend 2', 'Fake friend 3']

console.log(friends[0])

//Objects
//Declare a variable called me.  Make it an object with the following properties: name, age, lovesCode, friends, and greeting.  Use your previously declared variables to provide values to this object.

let me = {
    myName,
    age,
    lovesCode,
    friends,
    greeting
}

//Console log the name property on your object.
//DOT NOTATION

console.log(me.myName)

//BRACKET NOTATION

console.log(me['myName'])

//Add a new property called favoriteNumber and give it a value of your favorite number.

me.favoriteNumber = 10

//Console log the whole object

console.log(me)

//Functions

//Write a function called sayHello, have it return the string of hello.  Invoke it below.

const sayHello = () => 'hello'

const sayHelloMultTimes = (num) => {
    for (let i = 0; i < num; i++) {
        console.log(sayHello())
    }
}

sayHelloMultTimes(10)

//Modify the above function to take in an argument of name.  Invoke it below passing in any name as a string.

const sayHelloWithName = (name) => {
    let returnString = `Hello, my name is ${name}`
    return returnString
}

// console.log(sayHello())
console.log(sayHelloWithName('Jeff'))

//Create a function called sum as a function expression that takes in two parameters: num1 and num2.  Return their sum.  Invoke it below passing in any two numbers.

const sum = (num1, num2) => {
    return num1 + num2
}

let mySum = sum(5, 69)

console.log(mySum)

//Write a function as an arrow function called findFirst that will take in an array.  It should return the first item in the array.
const numsArr = [1, 2, 3, 4, 5, 6]

const findFirst = (arr) => {
    return arr[0]
}

console.log(findFirst(numsArr))

//If statements

//Write a function called equalChecker that takes in two numbers.  If they are equal return true, if they are not return false.

const equalChecker = (num1, num2) => {
    if (num1 === num2) {
        return true
    }
    return false
}

console.log(equalChecker(1,2))
console.log(equalChecker(1,1))

//Write a function called canIDrive that takes in a number, someones age.  If the person is under 16 return the string 'you can drive a bike'.  If they are between 16 and 50 return 'you can drive a car'.  Otherwise, return the string 'you can drive a cadillac'.  Invoke the function below.

const canIDrive = (age) => {
    if (typeof age !== 'number') {
        return 'Please enter a valid number for age'
    } else if (age < 16) {
        return 'You can drive a bike'
    } else if (age > 50) {
        return 'You can drive a Cadillac'
    } else {
        return 'You can drive a car'
    }
}

console.log(canIDrive(13))
console.log(canIDrive(16))
console.log(canIDrive(62))
console.log(canIDrive('age'))

//Scope

//Look at the variables and functions below.  Let's figure out what is visible where.

let globalVar = 'I am on the global scope'

function outerFn() {
  let outerVar = 'I am scoped to outerFn'
  console.log(globalVar)
  console.log(outerVar)
  function innerFn() {
    let innerVar = 'I am scoped to innerFn'
    console.log(globalVar)
    console.log(outerVar)
    console.log(innerVar)
  }
  innerFn()
}

outerFn()
