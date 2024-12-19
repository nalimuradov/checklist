import Header from "../components/Header"
import SignupForm from "../components/SignupForm"
import { useAuth } from "../hooks/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Signup() {

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
            {!isLoggedIn ? <SignupForm/> : null}
        </>
    )
}