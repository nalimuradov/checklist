export const login = async (username: string, password: string) => {
    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

    if (!response.ok){
        throw new Error('login failed')
    }

    return response.json()
}

export const register = async (username: string, password: string) => {
    const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

    if (!response.ok){
        throw new Error('registration failed')
    }

    return response.json()
}