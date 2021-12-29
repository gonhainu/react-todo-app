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
      <span className='font-base mr-4'>{todo.content}</span>
      <button
        className='
          px-2
          py-1
          bg-blue-400
          text-white
          rounded
          hover:bg-blue-500
        '
        onClick={handleToggleTodoListItemStatus}
      >{todo.done ? '未完了リストへ' : '完了リストへ'}</button>
      <button
        className='
          px-2
          py-1
          bg-red-400
          text-white
          rounded
          hover:bg-red-500
        '
        onClick={handleDeleteTodoListItem}
      >削除</button>
    </li>
  )
}