import * as Types from './types'
import { ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './types'
import { ActionShape } from '../common_types'

export type TodoSingleType = string
export type TodoStateShape = Array<TodoSingleType>

const INITIAL_STATE: TodoStateShape = [ 'number one angel' ]

type ActionType = ActionShape<typeof Types, TodoSingleType>

export default function reducer(state = INITIAL_STATE, { type, payload }: ActionType): TodoStateShape {
  switch (type) {
    case ADD_TODO:
      return [ ...state, payload! ];

    case REMOVE_TODO:
      return state.filter(item => item !== payload);

    case REMOVE_ALL_TODOS:
      return [];

    default:
      return state;
  }
}
