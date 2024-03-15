// for

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  // console.log(num)
}

const greetings = 'Hello World!'

for (const greet of greetings) {
  // console.log(`Each Char of ${greet}`)
}

// map

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United states of America')
map.set('FR', 'France')
map.set('IN', 'India')

// console.log(map)

for (const [key, value] of map) {
//   console.log(key, ' :-', value)
}

const myObj = {
    "game1" : "NFS",
    "game2" : 'spiderman'
}

for (const games of myObj) {
    // console.log(`game is ${games}`)
}

// for of loop is not work for Objects.