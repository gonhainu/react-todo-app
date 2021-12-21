import axios from 'axios'

const todoDataUrl = 'http://localhost:3100/todos'

export type Todo = {
  id: string,
  content: string,
  done: boolean
}
export type TodoList = Todo[]

export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl)
  return response.data
}

export const addTodoData = async (todo: Todo) => {
  const response = await axios.post(todoDataUrl, todo)

  return response.data
}

export const deleteTodoData = async (id: string) => {
  await axios.delete(`${todoDataUrl}/${id}`)
  return id
}

export const updateTodoData = async (id: string, todo: Todo) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo)
  return response.data
}