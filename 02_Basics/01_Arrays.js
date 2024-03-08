//Arrays

const arr = [0, 1, 2, 3, 4, 5] // 0,1,2,3,4,5 is Elements
const Heros = ['shaktiman', 'naagraj'] //Any Datatype can be use for elemnets

const aar2 = new Array(0, 1, 2, 3, 4)

// console.log(arr[1]) // index star From 0 in Array and for access the value to usek []

// Array Methods

// arr.push(6, 7) // Add elements in Array
// arr.pop() // remove last element

// arr.unshift(-1) // Add element from start of elements
// arr.shift() // it's remove first element of array

// console.log(arr.includes(110)) // Check the element in array (true or false)
// console.log(arr.indexOf(2))

// const newArr = arr.join() // convert array into string

// console.log(arr)
// console.log(newArr)

//slice, splice

console.log('A', arr)

const arrA = arr.slice(1, 2) //

console.log(arrA)
console.log('B', arr)

const arrB = arr.splice(0,3) // Splice deleted that elements that we discribe in ().
console.log('C', arr) 

console.log(arrB)
