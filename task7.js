const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    const url = req.url;
    if(url === '/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>hello page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server</h1></body>')
        res.write('</html>');
        res.end();
    } else if(url === '/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>hello page</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>');
        res.end();
    } else if(url === '/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>hello page</title></head>');
        res.write('<body><h1>Welcome to about us Pages</h1></body>')
        res.write('</html>');
        res.end();
    } else {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>hello page</title></head>');
        res.write('<body><h1>Bad request</h1></body>')
        res.write('</html>');
        res.end();
    }

});

server.listen(3000, 'localhost', () => {
    console.log('server running at port 3000');
})