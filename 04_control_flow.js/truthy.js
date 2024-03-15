const userEmail = []

if (userEmail) {
  console.log('Got the User Email')
} else {
  console.log('Not get user Email')
}

//flasy values

// "", 0,-0,k false, null,NaN, undifined, Bigint 0n,

// truthy values

// "0", " ", true,"false",[],{},function(){}

//to check Array empty or not
const userArray = []

if (userArray.length === 0) {
  //   console.log('Array is empty')
}

// to check object empty or not

const userobject = {}

if (Object.keys(userobject).length === 0) {
  //   console.log('object is Empty')
}

// Nullish Coalescing Operator (??):  null undefined

let val1

// val1 = 5 ?? 10
// val1 = null ?? 10
//  val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// Terniary Opretor

//condition ? true : false

const iceCoffeePrice = 100

iceCoffeePrice >= 80 ? console.log("more than 80") : console.log("less than 80")
