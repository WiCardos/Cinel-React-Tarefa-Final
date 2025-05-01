import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const url = `http://localhost:3001`

function EditTaskPage() {

  const { id } = useParams() // <- Adicionar
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("")
  const [done, setDone] = useState(false)

  // Adicionar! Autopreencher dados existentes
  useEffect(() => {
    axios.get(`${url}/tasks/${id}`)
      .then(response => {
        const task = response.data
        setTitle(task.title)
        setDescription(task.description)
        setPriority(task.priority)
        setDone(task.done)
      })
  }, [])

  const handleSubmit = (e) => {

    e.preventDefault()

    axios.put(`${url}/tasks/${id}`, {
      title, description, priority, done
    }).then(response => {

      console.log(response.status)
      // Se foi submetido, status 200 (trocar para 200)
      if (response.status === 200) {
        navigate(`/list`)
      }
    })

  }

  return (
    <div>

      <form action="" onSubmit={handleSubmit}>

        <div>
          <label htmlFor="title">Título:</label>
          <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label htmlFor="description">Descrição:</label>
          <input type="text" name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div>
          <label htmlFor="priority">Prioridade:</label>
          <input type="text" name='priority' value={priority} onChange={(e) => setPriority(e.target.value)} />
        </div>

        <div>
          <label htmlFor="done">Concluída:</label>
          <input type="checkbox" name='done' checked={done} onChange={(e) => setDone(e.target.checked)} />
        </div>

        {/* Change */}
        <button type="submit">Guardar Alterações</button>
      </form>

    </div>
  )
}

export default EditTaskPage