'use strict'

import * as express from 'express'  
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import routes from './routes/index'
import * as jwt from 'jsonwebtoken'

const PORT = process.env.PORT || 7001
const app = express()
app.enable('trust proxy')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }))
app.use(routes)
app.listen(PORT, () => console.log('Todo api listening on port', PORT))