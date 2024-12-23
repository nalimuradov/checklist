import { createContext, useState, useContext, ReactNode } from "react";

// holds state of login
const AuthContext = createContext({
    loginToken: localStorage.getItem('authToken'),
    setToken: (token:string) => {}
})

interface AuthProps {
    children: ReactNode
}

// custom hook that allows easy access of auth data
export const useAuth = () => {
    return useContext(AuthContext)
}

// wraps app to provide context to all components
export const AuthProvider = ({children}:AuthProps) => {

    const [loginToken, setLoginToken] = useState("")

    const setToken = (token:string) => {
        localStorage.setItem("authToken", token)
        setLoginToken(token)
    }

    return (
        <AuthContext.Provider value={{loginToken, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}