const score = 400
// console.log(score)

const balance = new Number(100.28232)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // After . show only 2 number // 100.28

const otherNumber = 123.98887

// console.log(otherNumber.toPrecision(3))

const hundreds = 100000

// console.log(hundreds.toLocaleString('en-IN'))   // Number ma ,  lagela avse// en-In India Starndard pramane avse

// ***************Maths*****************

// console.log(Math.abs(-4)) // abs() only convert -number to positive number // 4
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.1)) // 5
// console.log(Math.floor(4.9)) // 4
// console.log(Math.sqrt(100))
// console.log(Math.min(2,1,4,2,-1))
// console.log(Math.max(1,8,3,5,1,10))

// console.log(Math.random()) // Always give Value between 0 and 1
// console.log((Math.random() * 10) + 1)

// Create Random Number Between 10 to 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
