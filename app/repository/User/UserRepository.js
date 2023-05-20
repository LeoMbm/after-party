// Create user repository to handle all user related database operations
class UserRepository {

    constructor(database) {
        this.database = database;
    }
    findAllUser() {
        return this.database.findAllUser();
    }

    findUserById(id) {
        return this.database.findUserById(id);
    }

    findUserByEmail(email) {
        return this.database.findUserByEmail(email);
    }
    updateUser(user) {
        return this.database.updateUser(user);
    }

    deleteUser(id) {
        return this.database.deleteUser(id);
    }

    saveUser(user) {
        return this.database.saveUser(user);
    }
}