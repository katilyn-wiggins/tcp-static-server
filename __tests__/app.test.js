const request = require('supertest');
const app = require('../lib/app');
const index = require('../public/index.html');

describe('app routes', () => {
  it('ASYNC/AWAIT: it returns index.html from our public directory when it sends a request to the /index.html endpoint', async () => {
    const res = await request(app).get('/index.html');

    expect(res.text).toEqual(index);
  });
});
