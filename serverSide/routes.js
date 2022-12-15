import express from "express";
import postgres from "postgres"; 
import cors from "cors";
let app = express();

let sql = postgres({
    database : 'movies',
    password : '0'
});

app.use(express.json());
app.use(cors());
app.use(express.static("./client"));

// app.get('/movies', async (req, res) => {
//     res.send( await sql`SELECT * FROM movies`)
// })

app.get('/movies', (req, res) => {
    sql`SELECT * FROM movies`.then( result => {
        res.json(result);
    })
})

// app.get for index or id.
// app.post 

app.listen(3000, function(){
    console.log('server is running')
})