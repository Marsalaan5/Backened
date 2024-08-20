require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('rashiddotcom')

})

app.get('/login',(req,res)=>{
res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur backened</h2>')
})


app.listen(process.env.port, () => {
console.log(`Example listening on port : ${port}`)
})