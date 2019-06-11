import { ActionType } from './types'

export type TodoSingleType = string
export type StateType = Array<TodoSingleType>

export enum Actions {
  /** Adicionar novo item a lista. */
  ADD_TODO,
  /** Remover um item da lista. */
  REMOVE_TODO,
  /** Remover todos os itens da lista. */
  REMOVE_ALL_TODOS,
}

type TodoActionType = ActionType<Actions, TodoSingleType>

const initialState: StateType = [ 'number one angel' ]

export function todoReducer(state = initialState, { type, payload }: TodoActionType): StateType {
  switch (type) {
    case Actions.ADD_TODO:
      return [ ...state, payload! ];

    case Actions.REMOVE_TODO:
      return state.filter(item => item !== payload);

    case Actions.REMOVE_ALL_TODOS:
      return [];

    default:
      return state;
  }
}

export const TodoActionCreators = {
  addTodo: (payload: TodoSingleType) => ({ type: Actions.ADD_TODO, payload }),
  removeTodo: (payload: TodoSingleType) => ({ type: Actions.REMOVE_TODO, payload }),
  removeAll: () => ({ type: Actions.REMOVE_ALL_TODOS }),
}
