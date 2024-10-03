const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    // 這裡會放入 req 跟 res 的設定
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello Node.js Server.');
})

server.listen(port, hostname, () => {
    console.log('Node.js Server is ready.')
})
