import { useEffect, useMemo, useReducer } from 'react'
import {
  reducer,
  initialState,
  TodoFilter,
  TodoOrderBy,
  TodoOrderDirection,
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
      toggleCompleteTodo: (id: TodoId) =>
        dispatch({ type: 'toggle_complete_todo', payload: id }),
      setTodoFilter: (filter: TodoFilter) =>
        dispatch({ type: 'set_todo_filter', payload: filter }),
      setTodoOrderBy: (orderBy: TodoOrderBy) =>
        dispatch({ type: 'set_todo_order_by', payload: orderBy }),
      setTodoOrderDirection: (orderDirection: TodoOrderDirection) =>
        dispatch({ type: 'set_todo_order_direction', payload: orderDirection }),
    }),
    [state]
  )

  return value
}
