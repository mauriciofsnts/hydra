import React, { useEffect, useState } from 'react'

const App: React.FC<any> = ({ name }) => {
  const [tasks, updateTasks] = useState([])

  useEffect(() => {
    window.addEventListener('@hydra/react-route/todo/add-task', (e: any) => {
      updateTasks((prev) => [...prev, e.detail])
    })
  }, [])

  return (
    <>
      <h1>{name}</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tasks</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
