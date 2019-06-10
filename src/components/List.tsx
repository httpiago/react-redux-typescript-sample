import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../store'
import { TodoActionCreators } from '../store/TodoStore'

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {
  children?: never,
}

const List: FunctionComponent<Props> = ({ todos, ...props }) => {
  function handleDeleteItem(item: string) {
    props.removeTodo(item)
  }

  return (
    <ul>
      {todos.map(item => (
        <li
          key={item}
          onClick={handleDeleteItem.bind(null, item)}
          title="Clique para remover"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ todos }: AppState) => ({
  todos
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodoActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)