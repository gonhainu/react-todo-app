import { TodoItem } from "./TodoItem"
import * as todoData from '../apis/todos'

type TodoListProps = {
  todoList: todoData.TodoList,
  toggleTodoListItemStatus: Function,
  deleteTodoListItem: Function
}

export const TodoList = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem }: TodoListProps) => {
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