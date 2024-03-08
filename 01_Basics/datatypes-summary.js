// Primitive Datatype

// 7 type : String, Number, Boolean, null, symbol, Bigint

const score = 100
const value = 100.3

const IsLoggedIn = false
const temp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 23234234239453244234214234n // last ma n lagavathi Bigint Datatype bane
// console.log(bigNumber);

// Non Primitive (refrence type)

//Array , Object, Function

//Array
const hero = ['Shaktiman', 'naagraj', 'doga']
//Object
const myObj = {
  name: 'Arjun',
  age: 19,
}
//Function
const myFunction = function () {
  //   console.log('Hello World')
}

// console.log(typeof id)

// *******************memory************************

// Stack(primitive), Heap(Non-primitive)

let myName = 'ArjunKerasiya'

let anotherName = myName

anotherName = 'NileshKerasiya'

// console.log(anotherName)
// console.log(myName)

let userOne = {
  email: 'google@.com',
  id: 'googleybl',
}

let userTwo = userOne

userTwo.email = "Arjun12@gamil.com"

console.log(userOne)
console.log(userTwo)