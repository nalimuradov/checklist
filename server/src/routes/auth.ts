import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const router = express.Router()

interface User {
    username: string
    password: string
}
                
router.post('/login', async (req, res) => {
    const { username, password } = req.body

    const response = await fetch('http://localhost:5000/public/accounts.json')
    const registeredAccounts:User[] = await response.json()

    const user = registeredAccounts.find(u => u.username === username)

    if (!user) {
        res.status(401).send({message: "Invalid username"})
        return
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword){
        res.status(401).send({message: "Invalid password"})
        return
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' })
    res.json({ token })
})

router.post('/register', async (req, res) => {

    const { username, password } = req.body

    if (!username || !password) {
        res.status(401).send({message: "Need username and password"})
        return
    }

    try {
        const userData = fs.readFileSync(path.resolve('../server/public/accounts.json'), 'utf-8')
        const users:User[] = await JSON.parse(userData)

        const existingUser = users.find((user:User) => user.username === username)

        if (existingUser) {
            res.status(400).json({ message: 'Username already exists' })
            return
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = { username, password: hashPassword}
        users.push(newUser)

        fs.writeFileSync(path.resolve('../server/public/accounts.json'), JSON.stringify(users, null, 2))
        res.status(201).json({ message: 'User created successfully'})

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' })
    }
})

export default router