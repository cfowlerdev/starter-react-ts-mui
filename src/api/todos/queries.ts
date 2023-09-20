import { apiClient } from '../apiClient';
import { ITodoResponse, ITodoInput } from './types';

const findAll = async () => {
  const response = await apiClient.get<ITodoResponse[]>('/todos');
  return response.data;
};

const findById = async (id: number) => {
  const response = await apiClient.get<ITodoResponse>(`/todos/${id}`);
  return response.data;
};

const create = async (input: ITodoInput) => {
  const response = await apiClient.post<ITodoInput>('/todos', input);
  return response.data;
};

const update = async (id: number, input: ITodoInput) => {
  const response = await apiClient.put<ITodoInput>(`/todos/${id}`, input);
  return response.data;
};

const deleteById = async (id: number) => {
  const response = await apiClient.delete(`/todos/${id}`);
  return response.data;
};

const TodoService = {
  findAll,
  findById,
  create,
  update,
  deleteById
};

export default TodoService;
