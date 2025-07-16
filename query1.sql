CREATE DATABASE transaction_demo;

USE transaction_demo;

SHOW TABLES;

CREATE TABLE users_t1(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE logs(
  id INT PRIMARY KEY AUTO_INCREMENT,
  log_text TEXT
);

SHOW TABLES;

DESC logs;

SELECT * FROM users_t1;

SELECT * FROM logs;