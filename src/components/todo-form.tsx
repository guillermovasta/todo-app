import { useTodosContext } from '../context'
import { Todo } from '../types'

type TodoFormProps = {
  todo: Todo
}

const TodoForm = ({ todo }: TodoFormProps) => {
  const { updateTodo, removeTodo } = useTodosContext()

  return (
    <form className="flex items-center space-x-4">
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
        className=""
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
        className="bg-slate-50 flex-grow"
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
        className="bg-slate-50"
      />
      <button onClick={() => removeTodo(todo.id)}>x</button>
    </form>
  )
}

export { TodoForm }
