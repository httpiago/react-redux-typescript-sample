import React, { FunctionComponent, useState } from 'react'
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TodoActionCreators } from '../store/TodoStore'
import faker from 'faker'

type Props = ReturnType<typeof mapDispatchToProps> & {
  children?: never,
}

const Form: FunctionComponent<Props> = (props) => {
  const [newTodoText, setNewTodoText] = useState<string>('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodoText(event.target.value)
  }

  function handleAdd(event: React.FormEvent) {
    event.preventDefault();

    if (newTodoText !== '') {
      props.addTodo(newTodoText)
      setNewTodoText('')
    }
  }

  function handleAddRandom() {
    props.addTodo(faker.lorem.words(5))
  }

  return (
    <form onSubmit={handleAdd}>
      <input type="text" value={newTodoText} onChange={handleInputChange} />
      <button type="submit">Adicionar novo item</button>
      {' | '}
      <button onClick={handleAddRandom}>Adicionar item aleatório</button>
      <button onClick={props.removeAll}>Remover todos os items</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodoActionCreators, dispatch)

export default connect(null, mapDispatchToProps)(Form)
