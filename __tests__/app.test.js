const request = require('supertest');
const app = require('../lib/app');
// const index = require('../public/index.html');

describe('app routes', () => {
  it('ASYNC/AWAIT: it returns hi when it sends a get request to the / endpoint', async () => {
    const res = await request(app).get('/');

    expect(res.text).toEqual('hi');
  });
  it('ASYNC/AWAIT: it returns index.html from our public directory when it sends a request to the /index.html endpoint', async () => {
    const res = await request(app).get('/index.html');

    expect(res.text).toEqual(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Document</title>
</head>
<body>
<h7>One fine day with a woof and a purr
A baby was born and it caused a little stir
No blue buzzard, no three-eyed frog
Just a feline, canine little catdog
Catdog
Catdog
Alone in the world was a little catdog

Out on the road, or back in town
All kinda critters putting catdog down
Gotta rise above it, gotta try to get along
Gotta work together, gotta sing this song
Catdog
Catdog
Alone in the world was a little catdog

Catdog
Catdog
Alone in the world was a little catdog
Alone in the world was a little catdog</h7>
</body>
</html>`);
  });
});
