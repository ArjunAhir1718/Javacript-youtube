// if

const isTemp = 41

// if (isTemp === 40) {
//   console.log('Temprature is 40')
// } else {
//   console.log('Temprature is not 40')
// }

// <, > , <=, >= , != , == , === , !==

// const score = 200

// if (score > 100) {
//   const power = 'fly'
//   console.log(`User power ${power}`)
// }

// console.log(`User power ${power}`) // Show error

const balance = 1000

// if (balance > 500) console.log('test')

// if (balance < 500) {
//   console.log('less than 500')
// } else if (balance < 750) {
//   console.log('less than 750')
// } else if (balance < 950) {
//   console.log('less than 950')
// } else {
//   console.log('less than  1200')
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
  //   console.log('Alloe to buy course')
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log('User Logged In')
}
