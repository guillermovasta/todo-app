import { useEffect, useMemo, useReducer } from 'react'
import {
  reducer,
  initialState,
  TodoFilter,
  TodoOrderBy,
  TodoOrderDirection,
  TodoState,
} from '../reducer'
import { Todo, TodoId } from '../types'

const localStorageKey = 'todos'

const initFn = (initialValue = initialState) => {
  try {
    const localData = localStorage.getItem(localStorageKey)
    return localData ? JSON.parse(localData) : initialValue
  } catch {
    return initialValue
  }
}

export type TodosType = TodoState & {
  addTodo: (todo: Todo) => void
  removeTodo: (id: TodoId) => void
  updateTodo: (updatedTodo: Todo) => void
  toggleCompleteTodo: (id: TodoId) => void
  setTodoFilter: (filter: TodoFilter) => void
  setTodoOrderBy: (orderBy: TodoOrderBy) => void
  setTodoOrderDirection: (orderDirection: TodoOrderDirection) => void
  reorderTodos: (reorderedTodos: Todo[]) => void
}

export const useTodos = () => {
  const [state, dispatch] = useReducer(reducer, initialState, initFn)

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state))
  }, [state])

  const value = useMemo(
    () => ({
      ...state,
      addTodo: (todo: Todo) => dispatch({ type: 'add_todo', payload: todo }),
      removeTodo: (id: TodoId) =>
        dispatch({ type: 'remove_todo', payload: id }),
      updateTodo: (updatedTodo: Todo) =>
        dispatch({ type: 'update_todo', payload: updatedTodo }),
      toggleCompleteTodo: (id: TodoId) =>
        dispatch({ type: 'toggle_complete_todo', payload: id }),
      setTodoFilter: (filter: TodoFilter) =>
        dispatch({ type: 'set_todo_filter', payload: filter }),
      setTodoOrderBy: (orderBy: TodoOrderBy) =>
        dispatch({ type: 'set_todo_order_by', payload: orderBy }),
      setTodoOrderDirection: (orderDirection: TodoOrderDirection) =>
        dispatch({ type: 'set_todo_order_direction', payload: orderDirection }),
      reorderTodos: (reorderedTodos: Todo[]) =>
        dispatch({ type: 'reorder_todos', payload: reorderedTodos }),
    }),
    [state]
  )

  return value
}
