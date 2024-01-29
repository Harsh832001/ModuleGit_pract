const http = require('http')

const server = http.createServer((req,res) => 
{
    //res.write("Home Page");
    //res.end();

    if(req.url === '/'){
        res.end("This is Home Page")
    }

    if(req.url === '/about'){
        res.end("This is About Section")
    }

    else{
        res.end(`
    <h1>Oops!</h1>
    <a href="/">Click here to go to home</a>
    <p> Page is doen't exist></p>
    `)
    }

})

server.listen(5050);