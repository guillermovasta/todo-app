import type { FC } from 'react'
import { MinusIcon } from 'lucide-react'
import { useTodosContext } from '../context'
import { Todo } from '../types'

type TodoFormProps = {
  todo: Todo
}

const TodoForm: FC<TodoFormProps> = ({ todo }) => {
  const { updateTodo, removeTodo } = useTodosContext()

  return (
    <form className="flex items-center space-x-4 bg-white rounded-xl p-6">
      <input
        type="checkbox"
        name="completed"
        onChange={(e) => {
          updateTodo({
            ...todo,
            completed: e.currentTarget.checked,
          })
        }}
        checked={todo.completed}
        className="w-8 h-8"
      />
      <input
        type="text"
        name="title"
        onChange={(e) => {
          updateTodo({
            ...todo,
            title: e.currentTarget.value,
          })
        }}
        value={todo.title}
        className="flex-grow text-2xl outline-none font-sans font-bold"
      />
      <input
        type="date"
        name="dueDate"
        onChange={(e) => {
          updateTodo({
            ...todo,
            dueDate: e.currentTarget.value,
          })
        }}
        value={todo.dueDate}
        className="outline-none"
      />
      <button onClick={() => removeTodo(todo.id)}>
        <MinusIcon />
      </button>
    </form>
  )
}

export { TodoForm }
