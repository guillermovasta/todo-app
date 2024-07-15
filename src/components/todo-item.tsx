import type { FC } from 'react'
import { Reorder } from 'framer-motion'
import { Todo } from '../types'
import { TodoForm } from './todo-form'

const variants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: 'auto',
  },
  exit: { opacity: 0, height: 0 },
}

type TodoItemProps = {
  todo: Todo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <Reorder.Item value={todo} whileDrag={{ scale: 1.05 }} {...variants}>
      <TodoForm todo={todo} />
    </Reorder.Item>
  )
}

export { TodoItem }
