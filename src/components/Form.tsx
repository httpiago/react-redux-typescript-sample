import React, { FunctionComponent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeAll } from '../store/ducks/todos'
import faker from 'faker'

type Props = {
  children?: never,
}

const Form: FunctionComponent<Props> = () => {
  const dispatch = useDispatch()
  const [newTodoText, setNewTodoText] = useState<string>('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodoText(event.target.value)
  }

  function handleAdd(event: React.FormEvent) {
    event.preventDefault();

    if (newTodoText !== '') {
      dispatch(addTodo(newTodoText))
      setNewTodoText('')
    }
  }

  function handleAddRandom() {
    dispatch(addTodo(faker.lorem.words(5)))
  }

  function handleRemoveAll() {
    dispatch(removeAll())
  }

  return (
    <form onSubmit={handleAdd}>
      <input type="text" value={newTodoText} onChange={handleInputChange} />
      <button type="submit">Adicionar novo item</button>
      {' | '}
      <button onClick={handleAddRandom}>Adicionar item aleatório</button>
      <button onClick={handleRemoveAll}>Remover todos os items</button>
    </form>
  )
}

export default Form
