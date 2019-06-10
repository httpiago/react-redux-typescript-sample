import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { todoReducer } from './TodoStore'

const rootReducer = combineReducers({
  todos: todoReducer
})

/** Estado global da aplicação. */
const store = createStore(rootReducer, {}, composeWithDevTools())

export type AppState = ReturnType<typeof rootReducer>

export default store
