const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "farmerconnect"
})

app.post('/register', (req, res) => {

    console.log(req.body)

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    const age = req.body.age
    const gender = req.body.gender
    const typeOfFarmer = req.body.typeOfFarmer

    db.query("INSERT INTO user (firstName, lastName, email, password, age, gender, typeOfFarmer) VALUES (?,?,?,?,?,?,?)",
    [firstName, lastName, email, password, age, gender, typeOfFarmer],
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Values Inserted!")
        }
    }
    );
});

app.listen(3001, () => {
    console.log("yes, the server is running at port 3001.")
})