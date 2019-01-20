const http = require('http');
const port = 3000

const data = {
  "made" : "With Node",
  "puprose":"None",
  "author":"Thaumocracy"
}

const server = http.createServer((request,response) => {
  response.setHeader('Content-Type','text/html')
  response.write(`<html>`)
  response.write(`<head><title>A very rubbish way to send HTML</title></head>`)
  response.write(`<body><h2>Srsly rubbish way to write HTML</h2></body`)
  response.write(`</html>`)
  response.end()
})

server.listen(port,() => {
  console.log(`Server started at ${port}`)
});