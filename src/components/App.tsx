import { useTodo } from '../hooks/useTodo'
import React, { MouseEventHandler, useRef } from 'react'
import * as todoData from '../apis/todos'

type TodoTitleProps = {
  title: string,
  as: string
}
type TodoItemProps = {
  todo: todoData.Todo,
  toggleTodoListItemStatus: Function,
  deleteTodoListItem: Function
}
type TodoListProps = {
  todoList: todoData.TodoList,
  toggleTodoListItemStatus: Function,
  deleteTodoListItem: Function
}

const TodoTitle = ({ title, as }: TodoTitleProps) => {
  if (as === 'h1') return <h1>{title}</h1>
  if (as === 'h2') return <h2>{title}</h2>

  return <p>{title}</p>
}

const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }: TodoItemProps) => {
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done)
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id)
  return (
    <li>
      {todo.content}
      <button onClick={handleToggleTodoListItemStatus}>{todo.done ? '未完了リストへ' : '完了リストへ'}</button>
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  )
}

const TodoList = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem }: TodoListProps) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
        />
      ))}
    </ul>
  )
}

const TodoAdd = ({ inputEl, handleAddTodoListItem }: { inputEl: React.MutableRefObject<HTMLTextAreaElement>, handleAddTodoListItem: MouseEventHandler }) => {
  return (
    <>
      <textarea ref={inputEl} />

      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
    </>
  )
}

function App() {
  const { todoList, addTodoListItem, toggleTodoListItemStatus, deleteTodoListItem } = useTodo()

  const inputEl = useRef<HTMLTextAreaElement>(null!)

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === '') return

    addTodoListItem(inputEl.current.value)
    inputEl.current.value = ''
  }

  console.log('TODOリスト:', todoList)

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done
  })

  console.log('未完了TODOリスト:', inCompletedList)

  const completedList = todoList.filter((todo) => {
    return todo.done
  })

  console.log('完了TODOリスト:', completedList)

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />

      <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />

      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList todoList={inCompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />

      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList todoList={completedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
    </>
  );
}

export default App;
