import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const url = `http://localhost:3001`

function CreateTaskPage() {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("")
  const [done, setDone] = useState(false)


  const handleSubmit = (e) => {

    e.preventDefault()

    axios.post(`${url}/tasks`, {
      title, description, priority, done
    }).then(response => {
      // Se foi submetido
      if (response.status === 201) {
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

        <button type="submit">Adicionar</button>
      </form>

    </div>
  )
}

export default CreateTaskPage