import { FormControl } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/AuthContext"
import { TextField, Button } from "@mui/material"
import { useState } from "react"

export default function SignupForm(){

    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { isLoggedIn, login } = useAuth()

    const registerAccount = async () => {

        const newAccount = { username, password }

        try {
            const response = await fetch("accounts.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, 
                body: JSON.stringify(newAccount)
            })

            setUsername("")
            setPassword("")
        } catch (error) {
            alert("Error while adding account")
        }

        login(username, password)
        navigate('/')
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
                onClick={registerAccount}
                >Register
            </Button>
        </FormControl>
    )
}