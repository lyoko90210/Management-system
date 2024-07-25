
CREATE DATABASE employee_db;


\c employee_db;

CREATE TABLE Department (
    id SERIAL PRIMARY KEY ,
    Name VARCHAR(30) NOT NULL
);
  
CREATE TABLE Role (
    id SERIAL PRIMARY KEY ,
    Title VARCHAR(30) NOT NULL,
    Salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Department (id)
);

CREATE TABLE Employee (
    id  SERIAL PRIMARY KEY,
    First_name VARCHAR(30) NOT NULL,
    Last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    Manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES Role (id),
    FOREIGN KEY (Manager_id) REFERENCES Employee (id)
);



