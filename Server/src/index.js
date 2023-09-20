const http = require('http')
const characters = require('./utils/data.js')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('/rickandmorty/character')) {
        const partId = req.url.split('/')
        const idString = partId[partId.length - 1]
        const id = Number(idString)
        
        const searchCharacter = characters.find(character => character.id === id)
        if (searchCharacter) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(searchCharacter))
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end('Personaje no encontrado')
        }
    }
}).listen(3001, 'localhost');