//const inquirer = require('inquirer');
const {Pool} = require('pg');
const { prompt } = require('inquirer')
const CTable = require('console.table');

const pool = new Pool({ 
    user: 'postgres',
    host: 'localhost',
    database: 'employee_db',
    password: 'Fullstack',
    port: 5432

});
pool.connect();

function start() {
    prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View all employees', 'View all departments', 'View all roles', 'Add employee', 'Add department', 'Add role', 'Update employee role', 'Exit']
        }
    ]).then((answer) => {
        switch (answer.action) {
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'Add department':
                addDepartment();
                break;
            case 'Add role':
                addRole();
                break;
            case 'Update employee role':
                updateEmployeeRole();
                break;
            case 'Exit':
                pool.end();
                break;
        }
    });
}

function viewAllEmployees() {
    pool.query('SELECT * FROM Employee', (err, res) => {
        if (err) throw err;
        console.table(res.rows);
        start();
    });
}

function viewAllDepartments() {
    pool.query('SELECT * FROM Department', (err, res) => {
        if (err) throw err;
        console.table(res.rows);
        start();
    });
}

function viewAllRoles() {
    pool.query('SELECT * FROM Role', (err, res) => {
        if (err) throw err;
        console.table(res.rows);
        start();
    });
}

function addEmployee() {
    prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter employee first name:'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter employee last name:'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter employee role ID:'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter employee manager ID:'
        }
    ]).then((answer) => {
        pool.query('INSERT INTO Employee (First_name, Last_name, role_id, Manager_id) VALUES ($1, $2, $3, $4)', [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], (err, res) => {
            if (err) throw err;
            console.log('Employee added!');
            start();
        });
    });
}

function addDepartment() {
    prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter department name:'
        }
    ]).then((answer) => {
        pool.query('INSERT INTO Department (Name) VALUES ($1)', [answer.name], (err, res) => {
            if (err) throw err;
            console.log('Department added!');
            start();
        });
    });
}

function addRole() {
    prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter role title:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter role salary:'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter role department ID:'
        }
    ]).then((answer) => {
        pool.query('INSERT INTO Role (Title, Salary, Department_id) VALUES ($1, $2, $3)', [answer.title, answer.salary, answer.department_id], (err, res) => {
            if (err) throw err;
            console.log('Role added!');
            start();
        });
    });
}

function updateEmployeeRole() {
    prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'Enter employee ID:'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter new role ID:'
        }
    ]).then((answer) => {
        pool.query('UPDATE Employee SET role_id = $1 WHERE id = $2', [answer.role_id, answer.employee_id], (err, res) => {
            if (err) throw err;
            console.log('Employee role updated!');
            start();
        });
    });
}



start()