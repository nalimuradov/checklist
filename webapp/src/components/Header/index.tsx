import { AppBar, Toolbar, Button, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/AuthContext"
import { useEffect } from "react"

export default function Header(){

    const navigate = useNavigate()
    const { loginToken, setToken } = useAuth()

    const navigateLogout = () => { 
        setToken("")
        localStorage.removeItem('authToken')
        navigate('/login')
    }

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (token){
            setToken(token)
        }
    }, [])

    return (

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
            <Toolbar>
                {!loginToken ? (
                    <Button color="inherit"
                    sx={{marginLeft:0}}
                    onClick={() => navigate('/signup')}>
                    Sign Up
                    </Button>
                ): (
                    <Button color="inherit"
                    onClick={() => navigate('/dashboard')}>
                    Home
                    </Button>
                )}
                
                {!loginToken ? (
                    <Button color="inherit"
                    sx={{marginLeft:"auto"}}
                    onClick={() => navigate('/login')}>
                    Login
                    </Button>
                ): (
                    <>
                    <Button color="inherit"
                    sx={{marginLeft:"auto"}}
                    onClick={navigateLogout}>
                    Logout
                    </Button>
                    </>
                )}
                
            </Toolbar>
        </AppBar>
        </Box>
      
    )
}