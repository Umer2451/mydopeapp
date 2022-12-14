const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000
const pool = require('./dbConn')


app.get('/', (request, response) => {
  response.json({info : 'Node.js,Express, and Postgres API'})
})

app.get('/testdb', async(request, response) => {
    let res = await pool.query('select * from public.todoList')
    console.log(res);
    response.json({info : 'Node.js,Express, and Postgres API'})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})