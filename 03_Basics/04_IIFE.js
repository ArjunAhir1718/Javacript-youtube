// Immediately Invoked Function Expression (IIFE)

;(function chai() {
    //named IIFE
  console.log('DB connected')
})()

// ; important
;((name) => {
  console.log(`DB connected Two ${name}`)
})('arjun')
