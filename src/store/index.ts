import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { default as todoReducer } from './ducks/todos'

const rootReducer = combineReducers({
  todos: todoReducer
})

const middlewares = applyMiddleware(thunk)

/** Estado global da aplicação. */
const store = createStore(rootReducer, composeWithDevTools(middlewares))

export type AppState = ReturnType<typeof rootReducer>

export default store
