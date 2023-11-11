const mysql = require("mysql");

const db = mysql.createConnection({
    host: "mydb.cguew9pjfdba.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "ZBghkd030!",
    database: "mydb"
});

db.connect();

module.exports = db;