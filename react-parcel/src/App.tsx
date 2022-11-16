import React, { useState } from 'react'

const App: React.FC<any> = ({ name }) => {
  const [tasks, updateTasks] = useState([])

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
