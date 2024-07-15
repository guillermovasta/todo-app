import type { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PlusIcon } from 'lucide-react'
import { useTodosContext } from '../context'
import { TodoIcon } from '../icons/todo-icon'
import { TodoList } from './todo-list'
import { TodoFilter } from './todo-filter'

const TodoColumn: FC = () => {
  const { addTodo } = useTodosContext()

  return (
    <div className="bg-blue-100 rounded-2xl p-6 max-w-xl space-y-6">
      <div className="flex justify-between">
        <div className="flex items-center space-x-4">
          <TodoIcon />
          <h2 className="text-blue-800 font-bold font-sans text-2xl">To-Do</h2>
        </div>
        <div>
          <TodoFilter />
        </div>
      </div>
      <TodoList />
      <button
        onClick={() =>
          addTodo({
            id: uuidv4(),
            title: '',
            completed: false,
            dueDate: '',
          })
        }
      >
        <PlusIcon />
      </button>
    </div>
  )
}

export { TodoColumn }
