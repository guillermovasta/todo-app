import type { FC } from 'react'
import { TodosProvider } from '../provider'
import { useTodos } from '../hooks/use-todos'
import { TodoColumn } from './todo-column'

const TodoApp: FC = () => {
  return (
    <TodosProvider value={useTodos()}>
      <div className="bg-blue-800 min-h-screen p-10">
        <TodoColumn />
      </div>
    </TodosProvider>
  )
}

export { TodoApp }
