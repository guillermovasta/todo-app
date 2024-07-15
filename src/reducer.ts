import { Todo, TodoId } from './types'

export type TodoFilter = 'all_todos' | 'completed_todos'

export type TodoOrderBy = 'dueDate' | 'title'

export type TodoOrderDirection = 'asc' | 'desc'

export type TodoState = {
  todos: Todo[]
  filter: TodoFilter
  orderBy: TodoOrderBy
  orderDirection: TodoOrderDirection
}

export const initialState: TodoState = {
  todos: [],
  filter: 'all_todos',
  orderBy: 'title',
  orderDirection: 'desc',
}

const actionTypes = [
  'add_todo',
  'remove_todo',
  'update_todo',
  'toggle_complete_todo',
  'set_todo_filter',
  'set_todo_order_by',
  'set_todo_order_direction',
  'reorder_todos',
] as const

type ActionType = (typeof actionTypes)[number]

type TodoActionBase = {
  type: ActionType
}

type TodoAddAction = TodoActionBase & {
  type: 'add_todo'
  payload: Todo
}

type TodoRemoveAction = TodoActionBase & {
  type: 'remove_todo'
  payload: TodoId
}

type TodoUpdateAction = TodoActionBase & {
  type: 'update_todo'
  payload: Todo
}

type TodoToggleCompleteAction = TodoActionBase & {
  type: 'toggle_complete_todo'
  payload: TodoId
}

type TodoSetFilterAction = TodoActionBase & {
  type: 'set_todo_filter'
  payload: TodoFilter
}

type TodoSetOrderByAction = TodoActionBase & {
  type: 'set_todo_order_by'
  payload: TodoOrderBy
}

type TodoSetOrderDirectionAction = TodoActionBase & {
  type: 'set_todo_order_direction'
  payload: TodoOrderDirection
}

type ReorderTodosAction = TodoActionBase & {
  type: 'reorder_todos'
  payload: Todo[]
}

export type TodoAction =
  | TodoAddAction
  | TodoRemoveAction
  | TodoUpdateAction
  | TodoToggleCompleteAction
  | TodoSetFilterAction
  | TodoSetOrderByAction
  | TodoSetOrderDirectionAction
  | ReorderTodosAction

export const reducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'add_todo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'remove_todo':
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload
        }),
      }
    case 'update_todo':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload.id ? action.payload : todo
        }),
      }
    case 'toggle_complete_todo':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        }),
      }
    case 'set_todo_filter':
      return {
        ...state,
        filter: action.payload,
      }
    case 'set_todo_order_by':
      return {
        ...state,
        orderBy: action.payload,
      }
    case 'set_todo_order_direction':
      return {
        ...state,
        orderDirection: action.payload,
      }
    case 'reorder_todos':
      return {
        ...state,
        todos: action.payload,
      }
    default:
      return state
  }
}
