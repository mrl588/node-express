const {readFileSync, writeFileSync} = require('fs')
// the same as const fs = require('fs)
// then fs.readFileSync()

console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,second)

writeFileSync('./content/result-sync.txt',
     `here is the result ${first}, ${second}`, {flag:'a'})
     // the flag:"a" would append the text and not overide it

console.log('done')
console.log('starting next task')