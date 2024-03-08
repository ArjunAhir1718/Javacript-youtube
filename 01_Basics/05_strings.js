let myName = 'Arjun'
let myRepo = 3

// console.log(`Hello my name is ${myName} my repo count is ${myRepo}`)

const gameName = new String('Arjun-Ahir-17')

// console.log(gameName[0])
// console.log(gameName.__proto__) // . To use Prototype

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('A'))

const newStr = gameName.substring(3, 7)
// console.log(newStr)

const anotherStr = gameName.slice(-10, 1)
// console.log(anotherStr)

const strTwo = '   ARJUN   '
// console.log(strTwo)
// console.log(strTwo.trim())

const url = 'https://Arjun.com/result'

console.log(url.replace('result', 'marks'))

console.log(url.includes('Ak'))

console.log(gameName.split('-')) // Split on (-) // output Arjun, Ahir, 17
