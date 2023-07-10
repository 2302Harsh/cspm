
const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const cookieParser = require("cookie-parser")

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password02",
    database: "user"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req,res) => {
    const sqlGet = "SELECT * FROM user_db ";
    db.query(sqlGet, (error,result) =>{
        res.send(result);
    })
})

app.get("/api/pie", (req,res) => {
    const sqlGet = "SELECT * FROM pie_data ";
    db.query(sqlGet, (error,result) =>{
        res.send(result);
    })
})

app.post("/api/post",(req,res)=>{
    const { name, email, phone,age,access}= req.body;
    const sqlInsert = "INSERT INTO user_db (name,email,phone,age,access) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [name, email, phone,age,access], (error,result) =>{
        if(error){
            console.log(error);
        }
    });
});

app.get('/api/login',(req,res)=>{
    const sql = "SELECT * from logindata_db WHERE email = ? AND password = ?";
    
    db.query(sql, [ req.body.email,  req.body.password], (err, data) => {
        if(err) return res.json("Error");
        if(data.length > 0){
            return res.json("Login successfully")
        }else{
        return res.json("No record")
        }
    })
})

app.post("/api/form", (req, res)=> {
    
    const { first_name, last_name, email, contact, password}= req.body;
    const sql = "INSERT INTO logindata_db (`first_name`, `last_name`, `email`, `contact`, `password`) VALUES (?,?,?,?,?)"
    
    db.query(sql, [first_name, last_name, email, contact, password], (err, res) => {
        if(err) {
            return res.json("error");
        }
        return res.json(res)
    })
})

app.get("/",(req,res)=>{
    res.send("hi")
})

app.listen(5001, () =>{
    console.log("hi")
})