const request = require('supertest');
const app = require('../../app');
const { urls } = require('../../models/url.model')

describe('Test GET /urls', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
            .get('/urls')
            .expect(200)

        expect(response.body).toMatchObject(urls)
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
        
        expect(response.body).toMatchObject({
            url: "www.facebook.com"
        })
    })

    test('It should respond with 201 created', async () => {
        const response = await request(app)
            .put('/urls')
            .send({
                url: 'www.ebay.com'
            })
            .expect(201)

        expect(response.body).toMatchObject({
            url: "www.ebay.com"
        })
    })
})