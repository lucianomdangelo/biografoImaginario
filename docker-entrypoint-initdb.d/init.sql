CREATE DATABASE IF NOT EXISTS biografo_imaginario;

-- CREATE USER 'dbwebapp'@'%' IDENTIFIED BY 'dbwebapp';
-- GRANT ALL PRIVILEGES ON biografo_imaginario.* TO 'dbwebapp'@'%';

USE biografo_imaginario;

CREATE TABLE IF NOT EXISTS users(
	id int PRIMARY KEY  AUTO_INCREMENT,
	username varchar(128) NOT NULL UNIQUE,
	password varchar(128),
	createdAt datetime DEFAULT NULL,
	isAdmin boolean DEFAULT FALSE);

FLUSH PRIVILEGES ;
