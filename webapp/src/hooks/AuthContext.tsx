import { createContext, useState, useContext, ReactNode } from "react";

// holds state of login
const AuthContext = createContext({
    isLoggedIn: false,
    setLoginStatus: (status:boolean) => {}
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

    const setLoginStatus = (status:boolean) => {
        setIsLoggedIn(status)
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, setLoginStatus}}>
            {children}
        </AuthContext.Provider>
    )
}