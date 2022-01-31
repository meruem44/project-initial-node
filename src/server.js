const express = require('express')

const routes = require('./routes')

// Criando servidor express node
const server = express()
server.use(express.json())


server.use(routes)



server.listen(3333,() => {
    console.log('Server is running')
})


