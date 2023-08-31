// importando o Express
const Express = require('express')
const app = express()

// GET e POST
// são vebos http -->
// GET o usuário pede a informação 
// POST o usuário envia a informação

app.get('/', (requisicao, resposta) => {
    resposta.send("conheça o axidorizoxiribobunocleiton nosso mascote que sem duvidas é o melhor do mundo. Eu sei que você ama ele porque ele é o melhor do mundo")
})