const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
    res.end("Welcome to node server!");  
    }
    if(req.url === '/about'){
       res.end("Here is short story");
    }
    res.end(`<h1>Oops</h1>
    <p>The page your are trying to log is not exist</p>
    <a href="/">Bach to home</a>
    `);
});

server.listen(5000);