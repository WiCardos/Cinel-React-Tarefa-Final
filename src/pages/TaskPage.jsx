import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const url = `http://localhost:3001`

function TaskPage() {

  const navigate = useNavigate()

  const { id } = useParams()
  const [task, setTask] = useState({})

  // chamar a API e obter uma única task
  useEffect(() => {
    axios.get(`${url}/tasks/${id}`)
      .then(response => {
        setTask(response.data)
      })
  }, [])

  // Eliminar task e redirecionar para /list
  const eliminarTask = () => {
    axios.delete(`${url}/tasks/${id}`)
      .then(response => {
        navigate(`/list`)
      })
  }

  return (
    <div>
      <div>Dados da Tarefa com id: {id}</div>
      <div>Título: {task.title}</div>
      <div>Descrição: {task.description}</div>
      <div>Prioridade: {task.priority}</div>
      <div>Concluída:
        <input type="checkbox" checked={task.done} disable />
      </div>
      <button onClick={eliminarTask}>Eliminar</button>
      <Link to={`/editar/${id}`}>
        <button>Editar</button>
      </Link>
      <br />
      <br />
      <Link to={`/list`}>
        <button>Voltar</button>
      </Link>
    </div>
  )
}

export default TaskPage