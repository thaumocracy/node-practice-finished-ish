const http = require('http')
const fs = require('fs')
const port = 3000

const data = {
  "made" : "With Node",
  "puprose":"None",
  "author":"Thaumocracy"
}

const server = http.createServer((request,response) => {
  const url = request.url;
  const method = request.method

  if(url === '/'){
    response.write(`<html>`)
    response.write(`<head><title>A very rubbish way to send HTML</title></head>`)
    response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    response.write(`</html>`)
    return response.end()
  }

  if(url === '/message' && method === 'POST'){
    const body = []
    request.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })
    request.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFileSync('message.txt',message)
    })
    response.statusCode = 302
    response.setHeader('Location', '/')
    return response.end()
  }

  response.setHeader('Content-Type','text/html')
  response.write(`<html>`)
  response.write(`<head><title>A very rubbish way to send HTML</title></head>`)
  response.write(`<body><h1>Really bad way to send HTML</h1></body`)
  response.write(`</html>`)
  response.end()

})

server.listen(port,() => {
  console.log(`Server started at ${port}`)
});