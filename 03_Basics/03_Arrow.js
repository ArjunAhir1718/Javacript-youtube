const user = {
  // this refferce current context
  username: 'Arjun',
  price: 199,
  welcomeMessage: function () {
    // console.log(`${this.username}, welcome to  website`)
    // console.log(this)
  },
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// Arrow function

// const addtwo = (num1, num2) => {
//         return num1 + num2
// }


// for one line
// const addtwo = (num1, num2) => num1 + num2  // don't use return here 

const addtwo = (num1, num2) => ({username: "Arjun"})

console.log(addtwo(1, 5))
