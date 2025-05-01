import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import CreateUserPage from './pages/CreateUserPage'
import EditUserPage from './pages/EditUserPage'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import UsersPage from './pages/UsersPage'
import ListPage from './pages/ListPage'
import NavBar from './components/NavBar'

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
          {/* <Route path="/nova" element={<Create />} /> */}
          {/* <Route path="/editar/:id" element={<Create />} /> */}
          <Route path="/list" element={<ListPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h3>404!</h3>} />

        </Routes>
      </main>
    </>
  )
}

export default App
