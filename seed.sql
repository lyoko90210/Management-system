\c employee_db

INSERT INTO Department (Name) 
VALUES ('Engineering'), ('Sales'), ('Finance'), ('Legal');

INSERT INTO Role (Title, Salary, department_id)
VALUES ('Engineer', 100000, 1), ('Salesperson', 80000, 2), ('Accountant', 90000, 3), ('Legal Team Lead', 75000, 4);

INSERT INTO Employee (First_name, Last_name, role_id, Manager_id)
VALUES ('Daniel', 'Dennis', 1, NULL), ('Mike', 'Chan', 2, 1), ('Ashley', 'Rodriguez', 3, 1), ('Sarah', 'Linn', 4, 1), ('Kim', 'Jones', 1, 4), ('Jose', 'Gonzalez', 2, 4), ('Tim', 'Smith', 3, 4), ('Katie', 'Johnson', 4, 4);
