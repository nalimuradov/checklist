import Header from "../components/Header"
import LoginForm from "../components/LoginForm"
import { useAuth } from "../hooks/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Login() {

    const navigate = useNavigate()
    const { isLoggedIn } = useAuth()

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn, navigate])

    return (
        <>
        <Header/>
            {!isLoggedIn ? <LoginForm/> : null}
        </>
    )
}