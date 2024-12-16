import { FormControl } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useAuth } from "../hooks/AuthContext"
import { TextField, Button } from "@mui/material"

export default function Login() {

    const navigate = useNavigate()

    const { login, username, updateUsername } = useAuth()

    const pressLogin = () => {
        login()
        updateUsername(username)
        navigate('/')
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        updateUsername(e.target.value)
    }

    return (
        <>
        <Header></Header>
        <FormControl>
            <TextField variant="outlined"
                value={username}
                onChange={handleInputChange}
                placeholder="Enter your username">
            </TextField>
            <Button variant="outlined"
                onClick={pressLogin}
                >Login</Button>
        </FormControl>
        </>
    )
}