const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  // parse url
  const parsedUrl = url.parse(req.url, true)

  // get path name
  const path = parsedUrl.pathname
  
  // get http method
  const method = req.method.toLowerCase()

  res.setHeader('Content-Type', 'text/html')
  res.end(`<h1>Pathname: ${path} dan methodnya ${method}</h1>`)
})

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})