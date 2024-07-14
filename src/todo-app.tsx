import { v4 as uuidv4 } from 'uuid'
import { useTodos } from './hooks/use-todos'
import { TodoList } from './components/todo-list'
import { TodosProvider } from './provider'

const TodoApp = () => {
  const todos = useTodos()

  const handleClickAddTodo = () => {
    todos.addTodo({
      id: uuidv4(),
      title: '',
      completed: false,
      dueDate: '',
    })
  }

  return (
    <TodosProvider value={todos}>
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto border rounded-sm bg-slate-50">
          <TodoList todos={todos.todos} />
          <button onClick={handleClickAddTodo}>+ Add a todo</button>
        </div>
      </div>
    </TodosProvider>
  )
}

export { TodoApp }
