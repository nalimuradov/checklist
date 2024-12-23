import React from 'react'
import { Navigate } from 'react-router-dom'

interface PublicRouteProps {
    component: React.ComponentType
}

const PublicRoute: React.FC<PublicRouteProps> = ({component: Component}) => {
    const token = localStorage.getItem('authToken')

    return !token ? <Component /> : <Navigate to="/dashboard" />
}

export default PublicRoute