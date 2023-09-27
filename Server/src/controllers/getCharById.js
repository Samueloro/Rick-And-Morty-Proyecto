const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

async function getCharById(req, res) {

    try {
        const id = req.params.id;
        const response = await axios(`${URL}${id}`)

        if (response.data) {
            const { id, status, name, species, origin, image, gender } = response.data;
            res.json({ id, status, name, species, origin, image, gender })
        } else {
            res.status(404).send('Not found')
        }

    } catch (error){
        res.status(500).send({ message: error.message })
    }
}

module.exports = getCharById;


/* function getCharById(req, res) {
    const id = req.params.id;

    axios(`${URL}${id}`)
        .then(response => {
            if (response.data) {
                const { id, status, name, species, origin, image, gender } = response.data;
                res.json({ id, status, name, species, origin, image, gender })
            } else {
                res.status(404).send('Not found')
            }
        })
        .catch(error => {
            res.status(500).send({ message: error.message })
        })
}
 */


/* 
const getCharById = (res, id) => {
    axios(` https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
            }
            return res
                .writeHead(200, { 'Content-type': 'aplication/json' })
                .end(JSON.stringify(character))
        })
        .catch(error => {
            return res
                .writeHead(500, { 'Content-type': 'text/plain' })
                .end(error.message)
        })
}


*/