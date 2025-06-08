const http = require('http')

// const server = http.createServer((req,res) => {
// res.end('welcome')  
//})

// use Event Emitter APi
const server = http.createServer()
//server emits requet event
// subscribte to it/listen and respond to it
server.on('request', (req,res) =>{
    res.end("welcome")
})

server.listen(5000)