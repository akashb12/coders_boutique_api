const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    host: process.env.PSQL_HOST,
    port: process.env.PSQL_PORT, // default Postgres port
    database: process.env.PSQL_DATABASE
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};