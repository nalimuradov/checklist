const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: 'checklist_db',
    password: 'password',
    port: 5432
})

pool.connect()
    .then(() => console.log("connected to db ok"))
    .catch(() => console.log("error"))

module.exports = pool