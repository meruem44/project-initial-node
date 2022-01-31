const UserRepository = require('../repositories/UserRepository')

class CreateUserUseCase {
    execute() {
        const userRepository = new UserRepository()
    }
}