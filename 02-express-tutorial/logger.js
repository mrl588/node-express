function logger(req,res,next) {
    const method = req.method; // express  will pass it in itself
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)
    next() // pass it onto the next middleware
    //res.send('testing')// will terminate cycle
}

module.exports = logger