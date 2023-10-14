const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
    }
    res.end(`error page)`)
}
)

server.listen(3000, () => {
    console.log('Server listening on port : 5000....');
}   )
