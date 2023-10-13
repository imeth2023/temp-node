const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.write('Welcome to our home page')
    res.end()
  }
 
}
) 

server.listen(3000)