import { ActionShape } from '../types'

export type TodoSingleType = string
export type TodoStateShape = Array<TodoSingleType>

const INITIAL_STATE: TodoStateShape = [ 'number one angel' ]

/**
 * Action Types
 */
export const Types = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  REMOVE_ALL_TODOS: 'REMOVE_ALL_TODOS',
}

type ActionType = ActionShape<typeof Types, TodoSingleType>

/**
 * Reducer
 */
export default function reducer(state = INITIAL_STATE, { type, payload }: ActionType): TodoStateShape {
  switch (type) {
    case Types.ADD_TODO:
      return [ ...state, payload! ];

    case Types.REMOVE_TODO:
      return state.filter(item => item !== payload);

    case Types.REMOVE_ALL_TODOS:
      return [];

    default:
      return state;
  }
}

/**
 * Action Creators
 */
export function addTodo(payload: TodoSingleType) {
  return { type: Types.ADD_TODO, payload }
}

export function removeTodo(payload: TodoSingleType) {
  return { type: Types.REMOVE_TODO, payload }
}

export function removeAll() {
  return { type: Types.REMOVE_ALL_TODOS }
}
