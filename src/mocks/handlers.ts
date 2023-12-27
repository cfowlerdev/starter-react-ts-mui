import { rest } from 'msw';

export const handlers = [
  rest.get('/api/v1/todos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'argh!'
      })
    );
  })
];
