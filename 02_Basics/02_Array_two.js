//.concat() merge array and make a new array // don't use .push() to merge a array

const marvel_heros = ['thor', 'Ironman', 'Spider-man']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros) //poor way to merge array

// console.log(marvel_heros)
// console.log(marvel_heros[3][2])

// const all_heros =  marvel_heros.concat(dc_heros)
// console.log(all_heros)

//2 sperad oprator (...)

const new_heros = [...marvel_heros, ...dc_heros]

// console.log(new_heros)

const number = [0, 1, 2, [3, 4], 5, 6, [7, 8], 9]

const rightNum = number.flat(Infinity) // make all elements only in one array
// console.log(rightNum)

// console.log(Array.isArray('Arjun')) // to check is that array
// console.log(Array.from('Arjun')) // convert in array     //['A','r','j','u','n']
// console.log(Array.from({name: "Arjun"}))  // not convert, beacuse we need difined key or value


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3)) // [100, 200, 300]