import { createContext } from 'react'
import { TodosType } from './hooks/use-todos'

export const TodosContext = createContext<TodosType | undefined>(undefined)

type TodosProviderProps = {
  children: React.ReactNode
  value: TodosType
}

export const TodosProvider = ({ children, value }: TodosProviderProps) => {
  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}
