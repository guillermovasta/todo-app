import { useContext } from 'react'
import { TodosContext } from './provider'

export const useTodosContext = () => {
  const context = useContext(TodosContext)
  if (context === undefined) {
    throw Error('useTodosContext must be wrapped in TodosProvider')
  }
  return context
}
