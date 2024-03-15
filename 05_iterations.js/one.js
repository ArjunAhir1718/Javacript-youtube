// for loop

for (let i = 0; i <= 10; i++) {
  const element = i
  if (element == 7) {
    // console.log("7 is best Number")
  }
  // console.log(element)
}

// 0 to 10 pada (table)
for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value ${i}`)
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop value ${j} and ${i}`)
    // console.log(i + '*' + j + ' =' + i*j)
    // console.log(`${i} * ${j} = ${i * j}`)
  }
}

let myArray = ['flash', 'batman', 'superman']
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index]
  // console.log(element)
}

// for (let i = 1; i <= 20; i++) {
//   if (i == 7) {
//     console.log('7 detected')
//     break
//   }
//   console.log(`vlaue of i is ${i}`)
// }
for (let i = 1; i <= 20; i++) {
  if (i == 7) {
    console.log('7 detected')
    continue
  }
  console.log(`vlaue of i is ${i}`)
}
