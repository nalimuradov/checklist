import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const router = express.Router()
const pool = require('../db')

interface User {
    username: string
    password: string
}
                
router.post('/login', async (req, res) => {
    const { username, password } = req.body

    const user = await pool.query('SELECT * FROM accounts WHERE username = $1', [username])

    if (user.rows.length > 0) {
        res.status(400).json({ message: 'Username already exists' })
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

    console.log('REGISTERING')

    const { username, password } = req.body

    if (!username || !password) {
        res.status(401).send({message: "Need username and password"})
        return
    }

    try {
        const userData = await pool.query('SELECT * FROM accounts WHERE username = $1', [username])

        if (userData.rows.length > 0) {
            res.status(400).json({ message: 'Username already exists' })
            return
        }

        const hashPassword = await bcrypt.hash(password, 10)

        await pool.query(`INSERT INTO accounts (username, password) VALUES ($1, $2)`, [username, hashPassword])
        res.status(201).json({ message: 'User created successfully'})

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' })
    }
})

export default router