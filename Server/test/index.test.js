const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('GET /rickandmorty/character/:id', () => {
    it('Responde con status: 200', async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
        const response = (
            await agent.get('/rickandmorty/character/1')
        ).body;
        expect(response).toHaveProperty('id')
        expect(response).toHaveProperty('name')
        expect(response).toHaveProperty('species')
        expect(response).toHaveProperty('gender')
        expect(response).toHaveProperty('status')
        expect(response).toHaveProperty('origin')
        expect(response).toHaveProperty('image')
    })
    it('Si hay un error responde con status: 500', async () => {
        await agent.get('/rickandmorty/character/6666').expect(500);
    })
})

describe("GET /rickandmorty/login", () => {

    it('Credenciales ok', async () => {
        const response = await agent.get('/rickandmorty/login?email=ejemplo@gmail.com&password=123456');
        expect(response.body.access).toEqual(true);
    })
    it('No accseso', async () => {
        const response = await agent.get('/rickandmorty/login?email=ejemplo2@gmail.com&password=654321');
        expect(response.body.access).toEqual(false);
    })
})

const char1 = { id: 1, name: 'Rick' }
const char2 = { id: 2, name: 'Morty' }
describe("POST /rickandmorty/fav", () => {
    it('El body debe ser devuelto en arreglo', async () => {
        const response = await agent.post("/rickandmorty/fav").send(char1);
        expect(response.body).toEqual([char1])
    })
    it('El body debe ser devuelto en arreglo', async () => {
        const response = await agent.post("/rickandmorty/fav").send(char2);
        expect(response.body).toEqual([char1, char2])
    })
})

describe("DELETE /rickandmorty/fav/:id", () => {
    it('Si no está en Favs devuelve el arreglo', async () => {
        const response = await agent.delete("/rickandmorty/fav/5")
        expect(response.body).toEqual([char1, char2])
    })
    it('Si está en Favs lo elimina  del arreglo', async () => {
        const response = await agent.delete("/rickandmorty/fav/1")
        expect(response.body).toEqual([char2])
    })
})