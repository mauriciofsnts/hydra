import React, { useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { v4 as uuid } from 'uuid'

const App: React.FC<any> = ({ name }) => {
  const [task, updateTask] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateTask(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    console.log('Salvando dados...')

    dispatchEvent(
      new CustomEvent('@hydra/react-route/todo/add-task', {
        detail: { id: uuid(), describe: task },
      })
    )

    updateTask('')
  }

  return (
    <>
      <h1>{name}</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={task} />

        <button>Add</button>
      </form>

      <Parcel config={() => System.import('@hydra/react-parcel') as any} />
    </>
  )
}

export default App
