const request = require('supertest');
const app = require('./app.js');

describe('Test /links root path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/links')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Test undefined root path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/undefined')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });
});

describe('POST /links', () => {
  test('responds with json', (done) => {
    request(app)
      .post('/links')
      .send({ longLink: 'http://yandex.ru' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
