const { Pool } = require('pg');
require('dotenv').config();

class UserDatabase {
    constructor() {
        this.client = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        });
    }

    async query(query, values) {
        try {
            const result = await this.client.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }

    async getUsers() {
        const result = await this.client.query('SELECT * FROM users');
        return result.rows;
    }

    async getUserById(id) {
        const result = await this.client.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }

    async createUser(user) {
        const result = await this.client.query(
            'INSERT INTO users (username, password, email, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [user.username, user.password, user.email, user.first_name, user.last_name]
        );
        return result.rows[0];
    }



}

module.exports = UserDatabase;