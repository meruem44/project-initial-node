const express = require('express')
const crypto = require('crypto')


class UserController {
    create(request, response ) {
        const { name } = request.body

        // Conexão com o banco
    
        const user = {
            id: crypto.randomBytes(6).toString('hex'),
            name,
        }
    
        alunos.push(user)
    
        return response.send(user)
    
    }
}

module.exports = UserController