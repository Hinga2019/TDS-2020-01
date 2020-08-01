CREATE DATABASE bdretailsproject;

USE bdretailsproject;

CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR (225),
    password VARCHAR (225),
    email VARCHAR (225),
    fname VARCHAR (225),
    lname VARCHAR (225),
    age INT(10),
    role INT(10),
    photoUrl TEXT,
    type VARCHAR (225)
),

CREATE TABLE products(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(225),
    image VARCHAR(225),
    images TEXT,
    descripcion TEXT,
    price FLOAT,
    quantity INT(10),
    short_desc VARCHAR(225),
    cat_id INT(10)
);

CREATE TABLE categories(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(225),
);


ALTER TABLE products ADD FOREIGN KEY (cat_id) REFERENCES categories (id);