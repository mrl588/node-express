const {readFile, writeFile} = require('fs')
console.log('start')

readFile("./content/first.txt",'utf8', (err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const second = result;
    writeFile('./content/result-async.txt', `here is the result ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err)
            }
            console.log("done with this task")
        })
    })
})
console.log('starting with next task')