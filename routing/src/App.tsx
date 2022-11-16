import React from 'react'
import { router } from './routes'
import { useRoutes } from 'react-router-dom'

type Props = {}

const App: React.FC<Props> = () => {
  const content = useRoutes(router)

  return <div>{content}</div>
}

export default App
