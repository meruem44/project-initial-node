const express = require('express')
const crypto = require('crypto')

const UserController = require('./modules/Users/controller/UserController')

const alunos = [
    
]

// Definindo rotas
const routes = express.Router()
const userController = new UserController()

// Listando todos os users
routes.get('/users', (request, response) => {

// Executada

return response.send(alunos)
})

routes.get('/users/:id/', (request, response) => {

     const userId = request.params.id

     console.log(userId)
   
     const findUser = alunos.find(aluno => aluno.id == userId)

    return response.send(findUser)

})

routes.post('/users', userController.create)

module.exports = routes