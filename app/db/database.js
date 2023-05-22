const { Pool } = require('pg');


function createDatabaseConnection() {
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT || 5432
    });

    pool.connect((err, client, release) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }

        console.log('Connected to the database');
        release();
    });

    return pool;
}

module.exports = createDatabaseConnection;