const express = require('express')
const app = express();

// req => middleware => res

function logger(req,res,next) {
    const method = req.method; // express  will pass it in itself
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)
    next() // pass it onto the next middleware
    //res.send('testing')// will terminate cycle
}

app.get('/', logger , (req,res) => {
    res.send('Home')
})
app.get('/about',logger,(req,res) => {
    res.send('About')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})