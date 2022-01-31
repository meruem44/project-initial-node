const User = require("../models/User")

class UserRepository {

     users = []

    list() {
        return this.users
    }

    create(id, name) {
        const user = new User()

        user.id = id
        user.name = name

        this.users.push(user)

        return user
    }

}

module.exports = UserRepository