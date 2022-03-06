const request = require('supertest');
const app = require('../../app');
const { mongoConnect, mongoDisconnect } = require('../../services/mongo')

describe('Launching API', () => {
    beforeAll(async() => {
        mongoConnect()
    })

    afterAll(async() => {
        mongoDisconnect()
    })
    describe('Test GET /urls', () => {
        test('It should respond with 200 success', async () => {
            const response = await request(app)
                .get('/urls')
                .expect(200)
        })
    })
    
    describe('Test PUT /', () => {
        test('It should respond with 200 success', async () => {
            const response = await request(app)
                .put('/urls')
                .send({
                    url: 'www.facebook.com'
                })
                .expect(200)
        })
    
        test('It should respond with 201 created', async () => {
            const response = await request(app)
                .put('/urls')
                .send({
                    url: 'www.ebay.com'
                })
                .expect(200 || 201)
        })
    })
})
