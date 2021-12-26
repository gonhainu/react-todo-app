import * as todoData from '../apis/todos'

type TodoItemProps = {
  todo: todoData.Todo,
  toggleTodoListItemStatus: Function,
  deleteTodoListItem: Function
}

export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }: TodoItemProps) => {
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