import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import CreateUserPage from './pages/CreateUserPage'
import CreateTaskPage from './pages/CreateTaskPage'
import EditUserPage from './pages/EditUserPage'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import UsersPage from './pages/UsersPage'
import ListPage from './pages/ListPage'
import NavBar from './components/NavBar'
import TaskPage from './pages/TaskPage'

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/edit-user/:userId" element={<EditUserPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/tasks/:id" element={<TaskPage />} />
          {/* <Route path="/editar/:id" element={<EditTaskPage />} /> */}
          <Route path="/list" element={<ListPage />} />
          <Route path="/nova" element={<CreateTaskPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h3>404!</h3>} />

        </Routes>
      </main>
    </>
  )
}

export default App
