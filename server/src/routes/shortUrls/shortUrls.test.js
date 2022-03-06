const request = require('supertest')
const app = require('../../app')


describe('Test GET /', () => {
    test('It should redirect to url', async () => {
        const response = request(app)
            .get(('/:p0TIW'))
            .expect(200)
    })
})