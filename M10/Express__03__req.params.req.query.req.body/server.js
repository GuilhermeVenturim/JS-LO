const express = require('express')
const app = express()

//req.body é o corpo da requisição, podendo ser acessada através:
app.use(express.urlencoded({extended: true}))

//rota padrão para a página inicial
app.get('/', (req, res) => {
    res.send(`
    <style>
    body{
        background-color: #00FF7F;
    }
    form{
        text-align: center;
        font-size: 22px;
        background-color: #00FF7F;
        margin-top: 5%;
    }
    </style>
    <form action="/" method="post">
    NOME: <input type="text" name="nome">
    SOBRENOME: <input type="text" name="sobrenome">
    <button>ENVIAR NOME</button>
    </form>
    `)
})

//rota teste para req.params
//req.params são parâmetros usados nas rotas. EX: testes/123/456
app.get('/testes/:idUsers?/:parametro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
} )

//resposta com POST
//req.body é o corpo da requisição, podendo ser acessada através
app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome} ${req.body.sobrenome}`)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})


//CTRL + C para desligar o servidor

//test

