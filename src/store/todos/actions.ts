import { ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './types'
import { TodoSingleType } from './reducer'

export function addTodo(payload: TodoSingleType) {
  return {
    type: ADD_TODO,
    payload
  }
}

export function removeTodo(payload: TodoSingleType) {
  return {
    type: REMOVE_TODO,
    payload
  }
}

export function removeAll() {
  return {
    type: REMOVE_ALL_TODOS
  }
}
