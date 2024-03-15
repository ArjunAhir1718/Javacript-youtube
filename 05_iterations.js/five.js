const coding = ['js', 'css', 'java', 'react', 'c++']

coding.forEach(function (val) {
  // console.log(val)
})

//Array function

// coding.forEach( (item) => {
//     console.log(item)
// } )

function printMe(item) {
  //   console.log(item)
}

// coding.forEach(printMe)

// coding.forEach( (item, val, key) => {
//     console.log(item,val,key)
// } )

const myCoding = [
  {
    languageName: 'javascript',
    languageFileName: 'js',
  },
  {
    languageName: 'java',
    languageFileName: 'java',
  },
  {
    languageName: 'python',
    languageFileName: 'py',
  },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
} )