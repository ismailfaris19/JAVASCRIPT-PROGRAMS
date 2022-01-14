import { createConnection } from 'mysql';
import express from 'express';
var app = express();

app.use(express.json());


var mysqlConnection = createConnection({
    host: 'localhost',
    user: 'root1',
    password: 'root@123',
    database: 'emp',
    multipleStatements: true
});


mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + err);
});


app.listen(3000, () => console.log('Express server is running at port no : 3000'));


//Get all employees
app.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


//Get an employees
app.get('/employees/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


//Delete an employees
app.delete('/employees/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});


//Insert an employees
app.post('/employees', (req, res) => {
    let emp = req.body;
    let sql = "INSERT INTO Employee (EmpID, Name, EmpCode, Salary) VALUES (?, ?, ?, ?);"
    mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
        if (!err)
            res.send('inserted successfully.');
        else
            res.send('Already exists.');
    })
});

//Update an employees
app.put('/employees', (req, res) => {
    let emp = req.body;
    let sql = "UPDATE Employee SET Name = ?, EmpCode = ?, Salary = ? WHERE EmpID = ?;"
    mysqlConnection.query(sql, [emp.Name, emp.EmpCode, emp.Salary, emp.EmpID], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            res.send(err);
    })
});