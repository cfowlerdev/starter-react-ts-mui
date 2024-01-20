import { rest } from 'msw';
import {
  ICreateTodoInput,
  IGetTodoListResponse,
  IGetTodoResponse
} from '../../api/todos';
import { v4 as uuidv4 } from 'uuid';

const mockTodos: Array<IGetTodoResponse> = [
  {
    id: 'a2e69b3d-04ca-4147-84b6-18058ab1ab4b',
    createdAt: '2024-01-20T22:32:00Z',
    updatedAt: '2024-01-20T22:32:00Z',
    title: 'Wash the dishes',
    description: 'Need to wash the dishes before going to bed today',
    done: false
  },
  {
    id: '39da0022-02ba-4e3e-a690-88686881c6c8',
    createdAt: '2024-01-20T22:35:00Z',
    updatedAt: '2024-01-20T22:35:00Z',
    title: 'Take out the trash',
    description: 'Take out the trash before it starts stinking',
    done: false
  },
  {
    id: 'c6c3de58-f787-4aee-b059-8477fa39bbd1',
    createdAt: '2024-01-20T22:38:00Z',
    updatedAt: '2024-01-20T22:38:00Z',
    title: 'Feed the dog',
    description: 'Feed the dog before he starts eating from the trash',
    done: false
  }
];

export const handlers = [
  rest.get('/api/v1/todos', (req, res, ctx) => {
    const response: IGetTodoListResponse = {
      total: 0,
      pages: 1,
      size: 100,
      results: mockTodos
    };
    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get('/api/v1/tosos/:todoId', (req, res, ctx) => {
    const mockTodo = mockTodos.find((todo) => todo.id === req.params.todoId);
    if (mockTodo) {
      return res(
        ctx.status(200),
        ctx.json({
          ...mockTodo
        })
      );
    }
    return res(ctx.status(404));
  }),
  rest.post('/api/v1/todos', async (req, res, ctx) => {
    const body: ICreateTodoInput = await req.json();
    const todoId = uuidv4();
    const newTodo: IGetTodoResponse = {
      id: todoId,
      createdAt: '2024-01-01T12:30:00Z',
      updatedAt: '2024-01-01T12:30:00Z',
      ...body
    };
    mockTodos.push(newTodo);
    return res(ctx.status(200), ctx.json(newTodo));
  })
];
