// Create user repository to handle all user related database operations
const isUUID = require("../../utils/utils");

class UserRepository {

    constructor(database) {
        this.database = database;
    }
    async getAllUser() {
        try {
            const query = 'SELECT * FROM users';
            const result = await this.database.query(query);
            if (result) {
                return result;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }


    async getUserById(userId) {
        try {
            const query = 'SELECT * FROM users WHERE id = $1';
            const values = [userId];
            if (!userId) {
                throw new Error('User id is required');
            }
            else if (!isUUID(userId)) {
                throw new Error('User id must be a valid UUID');
            }
            const result = await this.database.query(query, values)
            if (result) {
                return result;
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
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
        return this.database.createUser(user);
    }
}

module.exports = UserRepository;