-- get rid of table if it's there
DROP DATABASE IF EXISTS bamazon_db;
-- make the database
CREATE DATABASE bamazon_db;
-- use the database
USE bamazon_db;

-- make table and columns for item_id, product_name, department_name, price, & stock_quantity
CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (item_id)
);

