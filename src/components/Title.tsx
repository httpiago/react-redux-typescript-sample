import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store'
import Loading from './Loading'

type Props = {
  children?: never,
}

const Title: FunctionComponent<Props> = () => {
  const todoLength = useSelector((state: AppState) => state.todos.list.length)
  const showLoading = useSelector((state: AppState) => state.todos.loading)

  return (
    <h1>
      Você tem {todoLength} todos:
      {showLoading && <Loading />}
    </h1>
  )
}

export default Title
