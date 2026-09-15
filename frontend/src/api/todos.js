// api/todos.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/todos'
});

export const fetchTodos = async (done) => {
  const response = await api.get('/', {
    params: done === 'all' ? {} : { done: done === 'done' }
  });

  return response.data;
};

export const createTodo = (title) =>
  api.post('/', { title }).then(res => res.data);

export const updateTodo = (id, updates) =>
  api.put(`/${id}`, updates).then(res => res.data);

export const deleteTodo = (id) =>
  api.delete(`/${id}`).then(res => res.data);
