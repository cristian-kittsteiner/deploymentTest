import express from "express";
import postgres from "postgres"; 

let app = express();

let sql = postgres({
    database : 'movies',
    password : 'Kryzztian1!'
});

app.use(express.json())

// app.get('/movies', async (req, res) => {
//     res.send( await sql`SELECT * FROM movies`)
// })

app.get('/movies', (req, res) => {
    sql`SELECT * FROM movies`.then( result => {
        res.send(result);
    })
})

// app.get for index or id.
// app.post 

app.listen(3000, function(){
    console.log('server is running')
})