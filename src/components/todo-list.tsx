import type { FC } from 'react'
import { Reorder } from 'framer-motion'
import { useTodosContext } from '../context'
import { TodoItem } from './todo-item'

const TodoList: FC = () => {
  const { todos, reorderTodos, filter } = useTodosContext()

  const filteredTodos = [...todos].filter((todo) => {
    const isCompleted = todo.completed && filter === 'completed_todos'
    const isAll = filter === 'all_todos'
    return isCompleted || isAll
  })

  return (
    <Reorder.Group
      values={filteredTodos}
      onReorder={(reorderedTodos) => reorderTodos(reorderedTodos)}
      className="space-y-6"
    >
      {filteredTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </Reorder.Group>
  )
}

export { TodoList }
