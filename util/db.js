const mysql = require('mysql2');

const pool = mysql.createPool ({
    host : 'localhost',
    user : 'root',
    database : 'node-complete',
    password : 'Gtr@vels123'
});

module.exports = pool.promise();