const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('ASYNC/AWAIT: it returns hi when it sends a request to the / endpoint', async () => {
    const res = await request(app).get('/');

    expect(res.text).toEqual('hi');
  });
  it('ASYNC/AWAIT: it returns 200 and the request body when it sends a post request to the /echo endpoint', async () => {
    const res = await request(app).post('/echo');

    expect(res.text).toEqual('hi');
  });
  it('ASYNC/AWAIT: it returns html and the word red when it sends a get request to the /red endpoint', async () => {
    const res = await request(app).get('/red');

    expect(res.text).toEqual('<h1>red<h1>');
  });
  it('ASYNC/AWAIT: it returns html and the word green when it sends a get request to the /green endpoint', async () => {
    const res = await request(app).get('/green');

    expect(res.text).toEqual('<h1>green<h1>');
  });
  it('ASYNC/AWAIT: it returns html and the word blue when it sends a get request to the /blue endpoint', async () => {
    const res = await request(app).get('/blue');

    expect(res.text).toEqual('<h1>blue<h1>');
  });
  it('ASYNC/AWAIT: it returns our error response when requesting an unknown endpoint', async () => {
    const res = await request(app).get('/purple');

    expect(res.text).toEqual('Not Found');
  });
});
