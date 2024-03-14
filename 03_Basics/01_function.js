// console.log('A')
// console.log('R')
// console.log('J')
// console.log('U')
// console.log('N')

function sayMyName() {
  console.log('A')
  console.log('R')
  console.log('J')
  console.log('U')
  console.log('N')
}

// sayMyName()

// function twoNumbers(number1, number2) { //(parameters)
//     console.log(number1 + number2)
// }

function twoNumbers(number1, number2) {
  // 1.  let result = number1 + number2
  //   return result                                  // once return type after nothing going to be print
  //2
  return number1 + number2

  console.log('Arjun') // not print because of return
}

const result = twoNumbers(6, 7) // (argumentns)

// console.log('Result: ', result)

function LoggedInMessage(username = 'sam') {
  if (username === undefined) {
    // console.log('Please enter a username')
    return
  }
  return `${username} is just logged In.`
}

// console.log(LoggedInMessage("Arjun"))
// console.log(LoggedInMessage("Arjun"))

function Cards(val1, vla2, ...num1) {
  return num1
}

// console.log(Cards(200, 300,400,1000,8000,400))

const user = {
  username: 'Arjun',
  price: '199',
}

function handelObj(anyObj) {
  console.log(`Username is ${anyObj.username} is pay price ${anyObj.price}`)
}

// handelObj(user)
handelObj({
    username: "sam",
    price: '399'
})


const myNewarr = [200,400,900,400]

function returnSecvalue(getarr) {
    return getarr[2]
}

//  console.log(returnSecvalue(myNewarr))
 console.log(returnSecvalue([200,400,950,100]))
