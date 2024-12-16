import { createContext, useState, useContext, ReactNode } from "react";

// holds state of login
const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
    username: "",
    updateUsername: (name:string) => {name}
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

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = () => setIsLoggedIn(true)
    const logout = () => setIsLoggedIn(false)
    const [username, setUsername] = useState("")
    const updateUsername = (name:string) => setUsername(name)

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout, username, updateUsername}}>
            {children}
        </AuthContext.Provider>
    )
}