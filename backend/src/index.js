const cors = require('cors')
const routes = require('./routes')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


//Rota / Recurso

//Métodos HTTP:
//GET: Buscar uma informaçào do back
//POST: Criar ''  ''         '' ''
//PUT: Alterar '' ''         no ''
//DELETE: Deletar ''  ''     '' ''

//Tipos de parametros
//Query params: Parametros nomeados enviados na rota após '?' (Filtros, Paginação)
//Route params: Parametros utilizados para identificar recursos
//Request Body: Corpo da requisição utilizado para criar ou alterar recursos

//Banco de dados:
//SQL: MySQL, PostgreSQL...
//NoSQL: MongoDB, CouchDB...

//Driver: SELECT * FROM users
//Querry Builder: table('users').select('*').where()

app.listen(3333)