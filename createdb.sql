CREATE DATABASE IF NOT EXISTS biografoImaginario;

USE biografoImaginario;

CREATE TABLE IF NOT EXISTS users(
	id int PRIMARY KEY  AUTO_INCREMENT,
	username varchar(128) NOT NULL UNIQUE,
	password varchar(128),
	createdAt datetime DEFAULT NULL,
	isAdmin boolean DEFAULT FALSE);