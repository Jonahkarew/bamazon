-- access the right db
USE bamazon_db;
-- define action, and which columns will be used
INSERT INTO products(product_name, department_name, price, stock_quantity)
-- value of products, order matters
VALUES
("Paper Towels", "Paper", 3.99, 45),
("Cookies", "Bakery", 4.99, 20),
("Dog Food", "Pets", 14.99, 14),
("Garbage Bags", "Grocery", 6.42, 21),
("Donuts", "Bakery", 6.99, 15),
("Ham", "Deli", 12.99, 6),
("Ice Cream", "Frozen", 4.95, 12),
("Eggs", "Dairy", 2.90, 17),
("Hot Pockets", "Frozen", 3.95, 9),
("Shovels", "Home & Garden", 8.97, 4),
("Firecrackers", "Grocery", 2.99, 30000)
