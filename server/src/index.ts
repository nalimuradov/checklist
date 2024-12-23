import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import authRoutes from './routes/auth'
import cors from 'cors'
import path from 'path'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const __dirname = path.resolve();

app.use(bodyParser.json())
app.use(cors())
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes)

app.get('/', (res) =>{
    console.log("Hello")
})

app.listen(port, () => {
    console.log('Running on http://localhost:' + port)
})