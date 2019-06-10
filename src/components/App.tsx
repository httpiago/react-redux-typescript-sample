import React, { FunctionComponent } from 'react'
import Buttons from './Form'
import List from './List'
import Title from './Title'

type Props = {
  children?: never,
}

const App: FunctionComponent<Props> = () => {
  return (
    <>
      <Title />
      <Buttons />
      <List />
    </>
  )
}

export default App
