const Rout = require("express");
const router = Rout();
const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

router.get("/", async (req, res) => {
  const connection = await mysql.createConnection(databaseConfig);
  const results = await connection.query(
    `SELECT * FROM fixtures ORDER BY RAND() LIMIT 5`
  );
  connection.end();
  res.json(results[0]).end();
});

module.exports = router;
