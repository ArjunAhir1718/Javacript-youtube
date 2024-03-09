// const tinderUser = new Object()  // this is singleton Object
const tinderUser = {} // this is non-singleton Object

tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
  email: 'same@gmail.com',
  fullname: {
    username: {
      firstname: 'Arjun',
      lastname: 'Kerasiya',
    },
  },
}

// console.log(regularUser.fullname.username.firstname)

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }

//1
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

//2

const onj3 = Object.assign({}, obj1, obj2) // merge

// console.log(obj3)

const users = [
  {
    id: '1',
    email: 'ahir@gmail.com',
  },
  {
    id: '2',
    email: 'arjun@gmail.com',
  },
  {
    id: '3',
    email: 'Nilesh@gmail.com',
  },
]

// console.log(users[2].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // Object's key access
// console.log(Object.values(tinderUser)) // Object's value access
// console.log(Object.entries(tinderUser)) // return key/value

// console.log(tinderUser.hasOwnProperty('name')) //to check property in object //true/flase

const course = {
  courseName: 'Js in hindi',
  price: '999',
  courseInstructor: 'hitesh',
}

course.courseInstructor
// Object distructure in differnt way
const { courseInstructor: teacher } = course
// console.log(teacher)



