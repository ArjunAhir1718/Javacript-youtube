// Dates

const myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

// const newDate = new Date(2024, 2, 22, 19, 30)
const newDate1 = new Date()

// console.log(newDate1.toLocaleString())

const myTimeStap = Date.now()

// console.log(myTimeStap)
// console.log(newDate1.getTime())
// console.log(Math.floor(Date.now()/1000))

const date = new Date()
// console.log(date)
// console.log(date.getMonth() + 1) // Month index start from 0 so + 1.
// console.log(date.getDay()) // week basis

newDate1.toLocaleString('default', {
    weekday: "long",
    minute:   "2-digit",
    day: "numeric",
    year: "2-digit"

})
