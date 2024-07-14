import { createContext, useContext } from 'react'
import { TodosType } from './hooks/use-todos'

const TodosContext = createContext<TodosType | undefined>(undefined)

type TodosProviderProps = {
  children: React.ReactNode
  value: TodosType
}

export const TodosProvider = ({ children, value }: TodosProviderProps) => {
  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

export const useTodosContext = () => {
  const context = useContext(TodosContext)
  if (context === undefined) {
    throw Error('useTodosContext must be wrapped in TodosProvider')
  }
  return context
}
