const path = require('path')
const porta = 3000
const express = require('express')

const app = express()

const router = express.Router()

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname+'/product.html'))
})

app.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname+'/servicos.html'))
})

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname,'/sobre.html'))
})

app.listen(process.env.port || porta, () => console.log('Servidor iniciado na porta '+porta))

