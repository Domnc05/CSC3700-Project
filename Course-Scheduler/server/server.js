require('dotenv').config()

const express = require('express')
const cors = require('cors')
const courseRouter = require('./routes/courses')
const completionRouter = require('./routes/completions')

const app = express()

app.use(cors({origin:process.env.CLIENT_ORIGIN}))
app.use(express.json())

app.use('/api', courseRouter)
app.use('/api', completionRouter)

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Course Scheduler running on http://localhost:${PORT}`)
})
