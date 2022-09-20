exports.paginaInicial = (req, res) => {
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
}

exports.tratamentoPost = (req, res) => {
    res.send(`Ei, sou sua nova rota de POST!!!!!`)
}

