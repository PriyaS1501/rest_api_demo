require('dotenv').config()
const http = require('http')
const port = process.env.port
const host = process.env.host
const app = require('./app')
// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.write('hello')
//         res.end()
//     }
// })
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`server started at ${host} : ${port}`)
})