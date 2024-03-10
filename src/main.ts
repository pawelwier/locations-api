import express, { Express, json, Request, Response } from 'express'
import dotenv from 'dotenv'
import { makeConnection } from './connection'
import { locationRouter } from './routers/locationRouter'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 4040

const uri: string = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@test.fdk5v31.mongodb.net/${process.env.MONGO_DB_NAME}`

makeConnection(uri as string)

app.use(json())

app.get('/test', (req: Request, res: Response) => {
  console.log('test')
  res.send({ test: 'OK' })
})

app.use('/location', locationRouter)

app.listen(port, () => {
  console.log('Server running on port:', port)
})