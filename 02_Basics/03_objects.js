//singleton
//Object.create //make object in contructor method

//object literals
const mySym = Symbol('key1')

const Jsuser = {
  name: 'Arjun',
  lastName: 'Kerasiya',
  [mySym]: 'key1', //add Symbol key use [ ]
  age: 19,
  location: 'Bhuj',
  email: 'arjun@google.com',
  isLoggedIn: false,
  lastLoggedIn: ['Monday', 'saturday'],
}

// console.log(Jsuser.email)
// console.log(Jsuser['email']) //keys save as string in objects

// console.log(Jsuser.lastName)
// console.log(Jsuser['lastName']) //Another Way to declered

// console.log(Jsuser[mySym]) // Symbol declered in [ ]

// Change

Jsuser.email = 'Arjun@Chatgpt.com'
// Object.freeze(Jsuser) // freeze not change value again
Jsuser.name = 'Nilesh' // Not change becouse of freeze
// console.log(Jsuser)

Jsuser.greeting = function () {
  console.log('Hello js user')
}

Jsuser.greetingTwo = function () {
  console.log(`Hello Js user, ${this.name}`)
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())