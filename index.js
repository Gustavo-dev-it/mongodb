const express = require('express')
const app = express()
const porta = 3000

const DBConection = require('./src/db/connection')
const router = require('./router/router')



//middleware
app.use(express.json())
app.use(router)





app.listen(porta, ()=>{
    DBConection() //Conexão com o banco de dados
    console.log('Aplicação rodando na porta', porta)
})