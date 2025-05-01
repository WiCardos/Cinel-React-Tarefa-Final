import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <NavLink to={`/users`}>All Users</NavLink>
        <NavLink to={`/create-user`}>Create User</NavLink>

        <NavLink to={`/list`}>Listar Tarefas</NavLink>
        <NavLink to={`/nova`}>Criar Tarefa</NavLink>
        <NavLink to={`/about`}>About</NavLink>
    </nav>
  )
}

export default NavBar