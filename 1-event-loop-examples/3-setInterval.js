setInterval(() => {
    console.log('hello world')
}, 2000)
console.log('I will run first ')
//process will stay alive because interval is async and must ctrl c