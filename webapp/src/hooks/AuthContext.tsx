import { createContext, useState, useContext, ReactNode, useEffect } from "react";

// holds state of login
const AuthContext = createContext({
    isLoggedIn: false,
    login: (username:string, password:string) => {},
    logout: () => {}
})

interface AuthProps {
    children: ReactNode
}

interface Account {
    username: String
    password: String
}

// custom hook that allows easy access of auth data
export const useAuth = () => {
    return useContext(AuthContext)
}

// wraps app to provide context to all components
export const AuthProvider = ({children}:AuthProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = (username:string, password:string) => {
        fetch("/accounts.json")
        .then((res) => res.json())
        .then((data) => {
            const checkUser = data.some(
                (account:Account) => account.username === username && account.password === password
            )
            if (checkUser) { setIsLoggedIn(true) } 
            else { alert("Incorrect credentials") }
        })
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}