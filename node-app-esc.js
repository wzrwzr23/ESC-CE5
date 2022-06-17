
/*const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('hello, express world'));
app.use(express.static('node_modules'));
app.use('/static', express.static('node_modules'));

app.listen(port, () => console.log(`Server listening at port ${port}...`));*/

//let http = require('http');
/*http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8124, "127.0.0.1");*/
//console.log('Server running at http://127.0.0.1:8124/');

const {readFileSync} = require('fs');
const http = require('http');
//const url = require('url');
const homepage = readFileSync('./index.html');
const about = readFileSync('./about.html');
const contact = readFileSync('./contact.html');
const image = readFileSync("./nao.jpg");
const logo = readFileSync('./logo.svg');
const server = http.createServer((req, res) => {
/*    res.writeHead(200, {'Content-type': 'image/jpg'});
    let imagestream = fs.createReadStream('assets/nao.jpg');
    imagestream.pipe(res);*/
    if(req.url === '/'||req.url === '/index.html'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write(logo);
        res.write(homepage);
        res.end();

    }
    else if(req.url === '/about.html'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write(about);
        res.end();

    }
    else if(req.url === '/nao.jpg'){
        res.writeHead(200, {'content-type':'jpg'});
        res.write(image);
        res.end();
    }
    else if(req.url === '/contact.html'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write(contact);
        res.end();}

    else{
        return res.end(`
        <h1>Sorry<\h1>
        <p>This page does not exist yet.<\p>
        <a href="/">Back Home<\a>
        `)
    }


});
server.listen(5000);
console.log('Node server running on port 5000');