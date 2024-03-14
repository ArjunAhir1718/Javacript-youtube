//   {}  is  Scope
// Don't use var

let a = 100
if (true) {
  let a = 10
  const b = 20
  var c = 30
  // console.log(a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// Nested Scope

function one() {
  //parent allow to declered variable in child  but,  not own {} outside
  const username = 'Arjun'
  function two() {
    //child not to declered variable outside of his {}
    const website = 'Youtube'
    // console.log(website)
  }
  // console.log(username)
  two()
}
one()

if (true) {
  const username = 'Arjun'
  if (username === 'Arjun') {
    const website = ' Youtube'
    // console.log(username + website)
  }
  // console.log(username)
  // console.log(website)
}
// console.log(username)

//++++++++++++++++++ Interesting ++++++++++++++++++

console.log(one(5)) // this is right
function one(num) {  // normal function
    return num + 1
}



console.log(two(5)) // this show error 
const two = function (num){  // variable 
    return num + 2
}