import express from "express";
import postgres from "postgres"; 
//import cors from "cors";

let sql = postgres('postgres://movies_86sz_user:DkaDXy0xEwgOFhgtFtl0XFpHyHsSjgee@dpg-cedngmcgqg43c91lt0pg-a.oregon-postgres.render.com/movies_86sz?ssl=true');

let app = express();
app.use(express.json());
app.use(express.static("../client"));
//app.use(cors());

// app.get('/movies', async (req, res) => {
//     res.send( await sql`SELECT * FROM movies`)
// })

app.get('/api/movies', (req, res) => {
    sql`SELECT * FROM movies`.then( result => {
        res.json(result);
    })
})

// app.get for index or id.
// app.post 

app.listen(3000, function(){
    console.log('server is running')
})