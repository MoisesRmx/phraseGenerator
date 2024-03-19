import app from './app.js'
import { config } from 'dotenv'

config()

const PORT = process.env.PH_PORT;

app.listen(PORT)
console.log('Running application on port: ', PORT)
