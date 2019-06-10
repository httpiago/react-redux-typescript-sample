import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../store'

type Props = ReturnType<typeof mapStateToProps> & {
  children?: never,
}

const Title: FunctionComponent<Props> = ({ todos }) => {
  return (
    <h1>Você tem {todos.length} todos:</h1>
  )
}

const mapStateToProps = ({ todos }: AppState) => ({
  todos
})

export default connect(mapStateToProps)(Title)
