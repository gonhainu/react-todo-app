import { useState, useEffect } from 'react'

import { ulid } from 'ulid'

import * as todoData from '../apis/todos'

export const useTodo = () => {
  const [todoList, setTodoList] = useState<todoData.TodoList>([])

  useEffect(() => {
    todoData.getAllTodosData().then((todo: todoData.TodoList) => {
      setTodoList([...todo].reverse())
    })
  }, [])

  const toggleTodoListItemStatus = (id: string, done: boolean) => {
    const todoItem = todoList.find((item) => item.id === id)
    if (typeof todoItem === 'undefined') return

    const newTodoItem = { ...todoItem, done: !done }

    todoData.updateTodoData(id, newTodoItem).then((updatedTodo: todoData.Todo) => {
      const newTodoList = todoList.map((item) => {
        return item.id !== updatedTodo.id ? item : updatedTodo
      })

      setTodoList(newTodoList)
    })
  }

  const addTodoListItem = (todoContent: string) => {
    const newTodoItem: todoData.Todo = {
      content: todoContent,
      id: ulid(),
      done: false
    }

    return todoData.addTodoData(newTodoItem).then((addTodo: todoData.Todo) => {
      setTodoList([addTodo, ...todoList])
    })
  }

  const deleteTodoListItem = (id: string) => {
    todoData.deleteTodoData(id).then((deleteListItemId: string) => {
      const newTodoList = todoList.filter((item) => item.id !== deleteListItemId)

      setTodoList(newTodoList)
    })
  }

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem
  }
}