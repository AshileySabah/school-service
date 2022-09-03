const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute.js')
const niveis = require('./niveisRoute.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(niveis)
}