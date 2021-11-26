let http = require('http');
const fs = require('fs');
const port = 3000;

let server = http.createServer((req, res) => {
    getURL = req.url;
    if(getURL === '/') {
        console.log('create server...');
        res.writeHead(200, {'content-type': 'text/html'});
        let htmlFile = fs.readFileSync('index.html')
        res.write(htmlFile);
        res.end();
    } 
    else if(getURL === '/assets/style.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        let cssFile = fs.readFileSync('./assets/style.css')
        res.write(cssFile);
        res.end();
    }  
    else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write(`<h1>PAGE NOT FOUND</h1>`);
        res.end();
    }
});

server.listen(port, function(){
    console.log('server running on port 3000...');
});