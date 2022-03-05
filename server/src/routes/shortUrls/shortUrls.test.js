const request = require('supertest')
const app = require('../../app')

describe('Test GET /', () => {
    test('It should redirect to urs', async () => {
        const response = request(app)
            .get(('/:short1'))
            .expect(200)
    })
})