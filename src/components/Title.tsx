import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store'

type Props = {
  children?: never,
}

const Title: FunctionComponent<Props> = () => {
  const todoLength = useSelector((state: AppState) => state.todos.length)

  return (
    <h1>Você tem {todoLength} todos:</h1>
  )
}

export default Title
