import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { News } from './pages/News'
import { ToastContainer } from 'react-toastify'
import { UserPage } from './pages/UserPage'
import { VerifyEmail } from './pages/VerifyEmail'

function App() {
  return (
    <Router>
      <>
      <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/news' element={<News />} />
          <Route path="/user/:id/posts" element={<UserPage />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
