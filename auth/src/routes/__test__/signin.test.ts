import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.net',
      password: 'waasperd',
    })
    .expect(400);
});

it('fails with an incorrect password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.net',
      password: 'waasperd',
    })
    .expect(201);
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.net',
      password: 'asswad',
    })
    .expect(400);
});

it('responds with a cookie on valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.net',
      password: 'waasperd',
    })
    .expect(201);
  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.net',
      password: 'waasperd',
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
