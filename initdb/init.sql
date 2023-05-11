CREATE TABLE IF NOT EXISTS example (
  id INT(11) NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  ip_address VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);
USE example;
INSERT INTO example (first_name,last_name,email,gender,ip_address) VALUES ('John','Macarel','john.m@gmail.com','male','192.168.0.1');
