import { ActionType } from './types'

export type TodoSingleType = string
export type StateType = Array<TodoSingleType>

export enum Actions {
  /** Adicionar novo item a lista. */
  ADD,
  /** Remover um item da lista. */
  REMOVE,
  /** Remover todos os itens da lista. */
  REMOVE_ALL_TODOS,
}

type TodoActionType = ActionType<keyof typeof Actions, TodoSingleType>

const initialState: StateType = [ 'number one angel' ]

export function todoReducer(state = initialState, { type, payload }: TodoActionType): StateType {
  switch (type) {
    case 'ADD':
      return [ ...state, payload ];

    case 'REMOVE':
      return state.filter(item => item !== payload);

    case 'REMOVE_ALL_TODOS':
      return [];

    default:
      return state;
  }
}

export const TodoActionCreators = {
  addTodo: (payload: TodoSingleType) => ({ type: 'ADD', payload } as TodoActionType),
  removeTodo: (payload: TodoSingleType) => ({ type: 'REMOVE', payload } as TodoActionType),
  removeAll: () => ({ type: 'REMOVE_ALL_TODOS' } as TodoActionType),
}
