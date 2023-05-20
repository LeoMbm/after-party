const { createDatabaseConnection } = require('../database');

class UserDatabase {
    constructor() {
        this.pool = createDatabaseConnection();
    }

}

module.exports = UserDatabase;