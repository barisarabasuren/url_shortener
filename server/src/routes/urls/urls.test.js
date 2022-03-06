const request = require('supertest');
const app = require('../../app');
const { mongoConnect, mongoDisconnect } = require('../../services/mongo')


describe('Launches API', () => {
    beforeAll(async() => {
        await mongoConnect()
    });

    afterAll(async() => {
        await mongoDisconnect()
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
    
        test('If first test, it should respond with 201 created. Otherwise', async () => {
            const response = await request(app)
                .put('/urls')
                .send({
                    url: 'www.ebay.com'
                })
                .expect(200 || 201)
        })
    })
})
