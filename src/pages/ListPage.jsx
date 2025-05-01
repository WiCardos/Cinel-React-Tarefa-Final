import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const url = `http://localhost:3001`

function ListPage() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    // chamar a API e obter tasks
    axios.get(`${url}/tasks`)
      .then(response => {
        setTasks(response.data)
      })

  }, [])

  return (
    <div className='tasks'>
      <h3>Todas as Tasks! </h3>

      {/* {tasks.map(task => ( */}
        <table>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Prioridade</th>
            <th>Concluída</th>
          </tr>
          
          {tasks.map(task => (
          <tr>
            <td><Link key={task.id} to={task.id}>
              {task.title}
            </Link></td>
            <td>{task.description}</td>
            <td>{task.priority}</td>
            <td>
              <input type="checkbox" checked={task.done} disable/>
            </td>
          </tr>
          ))}
        </table>
       {/* ))} */}

    </div>
  )
}

export default ListPage