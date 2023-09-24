const express = require('express');
const server = express()
const PORT = 3001
const router = require("./routes/index")

server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`);
});

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());

server.use("/rickandmorty", router);

module.exports = server;















/* const http = require('http')
const getCharById = require('./controllers/getCharById.js')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('/rickandmorty/character')){
        const partId = req.url.split('/')
        const idString = partId[partId.length - 1]
        const id = Number(idString)

        getCharById(res, id)
    }

}).listen(3001, 'localhost'); */