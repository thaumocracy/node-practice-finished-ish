const fs = require('fs')

const requestHandler = (request,response) => {
    console.log(`Routes connected`)
    const url = request.url
    const method = request.method

    if(url === '/'){
        response.setHeader("Content-Type", "text/html")
        response.write(`<html>`)
        response.write(`<head><title>Ass1</title></head>`)
        response.write(`<body>`)
        response.write(`<h1>Hi there! im an Ass One</h1>`)
        response.write(`<form action="/create_user" method="POST"><input type="text" name="user"><button type="submit">Create user</button></form>`)
        response.write(`</body>`)
        response.write(`</html>`)
        return response.end()
    }

    if(url === '/users'){
        response.setHeader("Content-Type", "text/html")
        response.write(`<html>`)
        response.write(`<head><title>Ass1</title></head>`)
        response.write(`<body>`)
        response.write(`<ul><li>Hi there! im an Ass One</li>`)
        response.write(`<li>Hi there! im an Ass One</li>`)
        response.write(`<li>Hi there! im an Ass One</li></ul>`)
        response.write(`</body>`)
        response.write(`</html>`)
        return response.end()
    }

    if(url === '/create_user' && method === 'POST'){
        const body = []
        request.on('data', (chunk) => {
          console.log(chunk)
          body.push(chunk)
        })
        
        return request.on('end', () => {
          const parsedBody = Buffer.concat(body).toString()
          const user = parsedBody.split('=')[1]
          fs.writeFile('lastUser.txt',user,(error) => {
            if(!error){
              console.log(`File saved : ${user}`)
              response.statusCode = 302
              response.setHeader('Location', '/')
              return response.end()
            }
          })
        })
      }
}

module.exports = requestHandler;