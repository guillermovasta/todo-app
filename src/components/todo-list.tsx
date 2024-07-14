import { Todo } from '../types'
import { TodoItem } from './todo-item'

type TodoListProps = {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </ul>
  )
}

export { TodoList }
