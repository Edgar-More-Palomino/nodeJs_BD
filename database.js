var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'employee_database',
    user: 'root',
    password: 'Soport3333'
});

module.exports = connection;