import { AppBar, Toolbar, Button, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/AuthContext"

export default function Header(){

    const navigate = useNavigate()
    const { logout } = useAuth()

    const navigateLogout = () => { 
        logout()
        navigate('/login')
    }

    const { isLoggedIn } = useAuth()

    return (

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
            <Toolbar>
                <Button color="inherit"
                    onClick={() => navigate('/')}>
                    Home
                    </Button>
                {!isLoggedIn ? (
                    <>
                    <Button color="inherit"
                    sx={{marginLeft:0}}
                    onClick={() => navigate('/signup')}>
                    Sign Up
                    </Button>
                    <Button color="inherit"
                    sx={{marginLeft:"auto"}}
                    onClick={() => navigate('/login')}>
                    Login
                    </Button>
                    </>
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