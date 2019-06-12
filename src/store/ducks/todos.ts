import { ActionShape } from '../types'
import { Dispatch } from 'redux'
import sleep from 'sleep-promise'

export type TodoSingleType = string
export type TodoStateShape = {
  loading: boolean,
  list: Array<TodoSingleType>
}

const INITIAL_STATE: TodoStateShape = {
  loading: false,
  list: [ 'number one angel' ]
}

/**
 * Action Types
 */
export const Types = {
  SHOW_LOADING: 'SHOW_LOADING',
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
    case Types.SHOW_LOADING: return {
      ...state,
      loading: true,
    };

    case Types.ADD_TODO: return {
      ...state,
      loading: false,
      list: [ ...state.list, payload! ]
    };

    case Types.REMOVE_TODO: return {
      ...state,
      loading: false,
      list: state.list.filter(item => item !== payload)
    };

    case Types.REMOVE_ALL_TODOS: return {
      ...state,
      loading: false,
      list: []
    };

    default: return state;
  }
}

/**
 * Action Creators
 */
export function addTodo(payload: TodoSingleType) {
  return (dispatch: Dispatch) => {
    dispatch({ type: Types.SHOW_LOADING })

    // fake request call to api
    sleep(1000).then(() => {
      return dispatch({ type: Types.ADD_TODO, payload })
    })
  }
}

export function removeTodo(payload: TodoSingleType) {
  return (dispatch: Dispatch) => {
    dispatch({ type: Types.SHOW_LOADING })

    // fake request call to api
    sleep(1000).then(() => {
      return dispatch({ type: Types.REMOVE_TODO, payload })
    })
  }
}

export function removeAll() {
  return (dispatch: Dispatch) => {
    dispatch({ type: Types.SHOW_LOADING })

    // fake request call to api
    sleep(1000).then(() => {
      return dispatch({ type: Types.REMOVE_ALL_TODOS })
    })
  }
}
