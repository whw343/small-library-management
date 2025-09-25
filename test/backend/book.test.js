// test/backend/book.test.js
const request = require('supertest');
const app = require('../../server'); // 假设你的 Express 服务器在 server.js 中

describe('GET /api/books', () => {
  it('should fetch all books', async () => {
    const res = await request(app).get('/api/books');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /api/books', () => {
  it('should add a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({
        title: 'New Book',
        author: 'Author Name',
        genre: 'Fiction',
        year: 2021,
      });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe('New Book');
    expect(res.body.author).toBe('Author Name');
  });
});

describe('DELETE /api/books/:id', () => {
  it('should delete a book by ID', async () => {
    const res = await request(app)
      .delete('/api/books/1') // 假设图书ID为 1
      .send();

    expect(res.status).toBe(200);
    expect(res.body.msg).toBe('Book deleted');
  });
});
