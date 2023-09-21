const http = require('http')
const getCharById = require('./controllers/getCharById.js')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('/rickandmorty/character')){
        const partId = req.url.split('/')
        const idString = partId[partId.length - 1]
        const id = Number(idString)

        getCharById(res, id)
    }

}).listen(3001, 'localhost');