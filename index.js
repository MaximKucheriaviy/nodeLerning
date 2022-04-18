const http = require('http');
const ropt = 2500;

const server = http.createServer((req, res) => {
    console.log("server reqest");
    console.log(req.url, req.method);

    

    res.setHeader('Content-Type', 'text/ht');
    res.write('Hello world');
    res.end();
})

server.listen(3000, 'localhost', (error) =>{
    if(error){
        throw(error);
    }
    else{
        console.log("Seerver run on port 3000")
    }
})