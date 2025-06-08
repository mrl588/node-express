const EventEmitter = require('events');

const customerEmitter = new EventEmitter()

customerEmitter.on('response', (name,id) => {
    console.log(`data recieved ${name} with id:${id}`)
})
customerEmitter.on('response', () => {
    console.log(`other`)
})


customerEmitter.emit('response','john',34)