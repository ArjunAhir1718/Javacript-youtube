const nums = [1, 2, 3, 4, 5]

// const total =  nums.reduce( function (acc, currval) {
//     console.log(`acc is ${acc} currval is ${currval}`)
//     return acc + currval
// },0)

const myTotal = nums.reduce((acc,curval) => acc +curval ,0)

// console.log(myTotal)

const shoppingCard = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 1999
    },
    {
        itemName: 'mobile dev course',
        price: 9999
    },
    {
        itemName: 'data anly course',
        price: 5999
    },
]

 const pricetoPay = shoppingCard.reduce((acc,item) => acc + item.price ,0)

 console.log(pricetoPay)

