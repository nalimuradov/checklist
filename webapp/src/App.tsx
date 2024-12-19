import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pods/Home'
import Login from './pods/Login'
import Signup from './pods/Signup'
import { AuthProvider } from './hooks/AuthContext'

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
