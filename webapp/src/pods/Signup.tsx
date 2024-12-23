import Header from "../components/Header"
import { FormControl } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/AuthContext"
import { TextField, Button } from "@mui/material"
import { useState } from "react"
import { register } from "../utils/api"

export default function SignupForm(){

    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { setLoginStatus } = useAuth()

    const registerAccount = async () => {

        try {
            await register(username, password)
            setLoginStatus(true)
            console.log("Account registered")
        } catch (error) {
            console.log("Error while creating account")
        }
        navigate('/')
    }

    return (
        <>
        <Header />
        <FormControl>
            <h2>Sign Up</h2>
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
                onClick={registerAccount}
                >Register
            </Button>
        </FormControl>
        </>
    )
}