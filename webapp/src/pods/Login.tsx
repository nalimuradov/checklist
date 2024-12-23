import Header from "../components/Header"
import { FormControl } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/AuthContext"
import { TextField, Button } from "@mui/material"
import { useState } from "react"
import { login } from "../utils/api";

export default function LoginForm(){

    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { setToken } = useAuth()

    const handleLogin = async () => {
        
        try {
            const data = await login(username, password)
            setToken(data.token)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <Header />
        <FormControl>
            <h2>Login</h2>
            <TextField 
                className="text-field"
                id="outlined-required-username"
                variant="outlined"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
                sx={{marginBottom:2}}>
            </TextField>
            <TextField 
                className="text-field"
                id="outlined-required-password"
                variant="outlined"
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{marginBottom:2}}>
            </TextField>
            <Button 
                className="button-input"
                variant="outlined"
                onClick={handleLogin}
                >Login
            </Button>
        </FormControl>
        </>
    )
}