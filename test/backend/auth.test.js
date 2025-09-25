// test/backend/auth.test.js
const request = require('supertest');
const app = require('../../server'); // 假设你的 Express 服务器在 server.js 中

describe('POST /api/auth/register', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(res.status).toBe(201);
    expect(res.body.msg).toBe('User registered');
  });

  it('should return error if email already exists', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('User already exists');
  });
});

describe('POST /api/auth/login', () => {
  it('should login a user and return a token', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('should return error if invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'wronguser@example.com',
        password: 'wrongpassword',
      });

    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('Invalid credentials');
  });
});
