import { Todo } from '../types'
import { TodoForm } from './todo-form'

type TodoItemProps = {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li>
      <TodoForm todo={todo} />
    </li>
  )
}

export { TodoItem }
