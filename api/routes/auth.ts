import { Router, Request, Response, NextFunction } from 'express'
import controllers from '../controllers'

let router = Router()

router.get('/google', controllers.auth.getGoogleAuthUrl)
router.get('/google/redirect', controllers.auth.getAuthRedirectUrl)
router.get('/google/callback', controllers.auth.getGoogleCallBackUrl)

export default router