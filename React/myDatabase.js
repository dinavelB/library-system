import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "appuser",
  password: "app1234",
  database: "my_first-Db",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

export default pool;
