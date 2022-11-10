import { Router } from 'express'
import * as express from 'express'
import auth from './auth'
import todo from './todo'

const router = Router({ strict: true })

router.get('/favicon.ico', (req, res) => res.end())
router.use('/auth', auth)
router.use('/todos', todo)
router.use('/', express.static('public'))


export default router