const express = require('express')
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
app.use([logger,authorize])
//app.use('/api',logger)
// api/product/ items
// wil work for any path that comes after api


app.get('/' , (req,res) => {
    res.send('Home')
})
app.get('/about',(req,res) => {
    res.send('About')
})

app.get('/api/products' ,  (req,res) => {
    res.send('products')
})

app.get('/api/items', (req,res) => {
    console.log(req.user)
    //can now find out the user for the req object from authorize middleware
    res.send('Items')
})

app.listen(3000, () => { 
    console.log('server is listening on port 3000') 
})