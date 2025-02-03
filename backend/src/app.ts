import express from 'express'
import cors from 'cors'
import config from './config'
import { connectDB } from './config/db'


const app = express()

// Middleware
app.use(cors(config.cors))
app.use(express.json())

// Basic health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' })
})

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Something went wrong!' })
})

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' })
})

const startServer = async () => {
    try {
        await connectDB()

        app.listen(config.port, () => {
            console.log(`Server running in ${config.env} mode on port ${config.port}`)
        })
    } catch (error) {
        console.error('Error starting server:', error)
        process.exit(1)
    }
}

if (process.env.NODE_ENV !== 'test') {
    startServer()
}

export { app, startServer }