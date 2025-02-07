import express from 'express'
import mysql from "mysql2"

const app = express()
const port = 3001

app.get("/", (req, res) => {
    res.send("connected successfully")
})

app.listen(port, () => {
    console.log(`Server is running on the http://localhost:${port}`);
    
})

