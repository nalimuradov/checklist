import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pods/Dashboard'
import Login from './pods/Login'
import Signup from './pods/Signup'
import { AuthProvider } from './hooks/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import { Navigate } from 'react-router-dom'
import PublicRoute from './components/PublicRoute'

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />}/>
          <Route path="/login" element={<PublicRoute component={Login}/>}/>
          <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />}/>
          <Route path="/signup" element={<PublicRoute component={Signup}/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
