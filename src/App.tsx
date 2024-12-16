import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pods/Home'
import Login from './pods/Login'
import { AuthProvider } from './hooks/AuthContext'

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
