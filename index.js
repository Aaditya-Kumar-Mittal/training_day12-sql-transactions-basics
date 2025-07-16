const mysql = require("mysql2/promise");

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "transaction_demo",
};

async function executeMyTransaction(config) {
  const connection = await mysql.createConnection(config);
  await connection.beginTransaction();
  try {
    const [result1] = await connection.query("INSERT INTO users_t1 SET ?", {
      name: "John",
    });
    const log = "User " + result1.insertId + " added";
    const [result2] = await connection.query("INSERT INTO logs SET ?", {
      log_text: log,
    });
    await connection.commit();
    console.log("Transaction Completed Successfully.");
  } catch (err) {
    await connection.rollback();
    console.error("Transaction Failed:", err);
  } finally {
    await connection.end();
  }
}

executeMyTransaction(config);
