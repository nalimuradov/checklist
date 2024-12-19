import { FormControl } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/AuthContext"
import { TextField, Button } from "@mui/material"
import { useState } from "react"

export default function LoginForm(){

    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { isLoggedIn, login } = useAuth()

    const pressLogin = () => {
        login(username, password)
        if (isLoggedIn) {
            alert("You are now logged in")
            navigate('/')
        } 
    }

    return (
        <FormControl>
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
                onClick={pressLogin}
                >Login
            </Button>
        </FormControl>
    )
}