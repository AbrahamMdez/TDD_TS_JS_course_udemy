import express from 'express'
import { config as dotenv } from 'dotenv'
import routes from './routes'
import middlewares from './middlewares'

const app = express()

middlewares(app)

//Routes INIT
routes(app)
dotenv()

export default app;

