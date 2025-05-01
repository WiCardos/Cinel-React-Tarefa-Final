import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import CreateTaskPage from './pages/CreateTaskPage'
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import NavBar from './components/NavBar'
import TaskPage from './pages/TaskPage'
import EditTaskPage from './pages/EditTaskPage'

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks/:id" element={<TaskPage />} />
          <Route path="/editar/:id" element={<EditTaskPage />} />
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
