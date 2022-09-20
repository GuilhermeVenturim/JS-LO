const express = require('express')
const app = express()

//rota padrão para a página inicial
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
    NOME: <input type="text" name="nome">
    <button>ENVIAR NOME</button>
    </form>
    `)
})

//resposta com POST
app.post('/', (req, res) => {
    res.send('Recebemos o seu nome!')
})

//rota para a página contato
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco!')
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})


//CTRL + C para desligar o servidor