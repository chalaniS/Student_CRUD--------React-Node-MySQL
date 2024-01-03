import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'

})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM students ";
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error inside the server" });
        return res.json(result);
    })
})


app.post('/student', (req, res) => {
    // const { sName, sAge, sAddress } = req.body;

    const sql = 'INSERT INTO students (`sName`, `sAge`, `sAddress`) VALUES (?, ?, ?)';

    const values = [
        req.body.sName,
        req.body.sAge,
        req.body.sAddress
    ]

    db.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        console.log('Data inserted successfully');
        res.status(200).send('Data inserted successfully');
    });
});


app.listen(8081, () => {

    console.log('listening 8081');
})