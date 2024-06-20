DROP Database Department_db;
CREATE DATABASE Department_db;


\c Department_db;



CREATE TABLE Department (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name_ VARCHAR(30) NOT NULL
);
  
CREATE TABLE Role (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Title VARCHAR(30) NOT NULL,
    Salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Department (id)
);

CREATE TABLE Employee (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    First_name VARCHAR(30) NOT NULL,
    Last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    Manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES Role (id),
    FOREIGN KEY (Manager_id) REFERENCES Employee (id)
);



