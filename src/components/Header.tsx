import { AppBar, Toolbar, Button, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/AuthContext"

export default function Header(){

    const navigate = useNavigate()
    const { logout, username } = useAuth()

    const navigateLogin = () => {
        navigate('/login')
    }

    const navigateLogout = () => { 
        logout()
        navigate('/')
    }

    const { isLoggedIn } = useAuth()

    return (

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
            <Toolbar>
                {!isLoggedIn ? (
                    <Button color="inherit"
                    onClick={navigateLogin}>
                    Login
                    </Button>
                ): (
                    <>
                    <Button color="inherit"
                    onClick={navigateLogout}>
                    Logout
                    </Button>
                    ({username})
                    </>
                )}
                
            </Toolbar>
        </AppBar>
        </Box>
      
    )
}