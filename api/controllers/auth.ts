import { Router, Request, Response, NextFunction } from 'express'
import * as path from 'path'
import configs from '../configs'
import { base } from '../express-typescript-base'
import * as jwjsonwebtokent from 'jsonwebtoken'
import { IGoogleProfile } from '../express-typescript-base/interfaces/auth'
import db from '../services/db'

async function getGoogleAuthUrl(req: Request, res: Response, next: NextFunction) {
    try {
        const clientId = configs.google.GOOGLE_CLIENT_ID
        const clientSecret = configs.google.GOOGLE_CLIENT_SECRET
        const redirectUrl = req.protocol + '://' + req.headers.host + configs.google.GOOGLE_REDIRECT_URL
        const scope = configs.google.GOOGLE_SCOPE
        const url = base.services.auth.getGoogleUrl(clientId, clientSecret, redirectUrl, scope)
        res.end(url)
    } catch (error) {
        console.log(error)
        res.status(500).end('Something went wrong') // Todo: handle error better
    }
}

async function getAuthRedirectUrl(req, res) {
    res.sendFile(path.join(__dirname + '/../public/auth.html'))
}

async function getGoogleCallBackUrl(req, res) {
    try {
        const profile = <IGoogleProfile>await base.services.auth.getGoogleCallback(
            configs.google.GOOGLE_CLIENT_SECRET,
            req.protocol + '://' + req.headers.host + configs.google.GOOGLE_REDIRECT_URL,
            req.query['code']
        )
        var token = jwjsonwebtokent.sign(
            { email: profile.email.toLowerCase() },
            configs.jwt.SECRET,
            { expiresIn: '30d', algorithm: 'RS256' }
        )
        const today = new Date()
        const exp = new Date(today)
        exp.setDate(today.getDate() + 30)
        const roles = ['user']
        const results = { exp: exp.getTime() / 1000, token, profile, roles }
        const possibleUser = await db.findOne('users', { email: results.profile.email })
        if (!possibleUser) {
            await db.save('users', { ...results.profile, at: new Date().toISOString() })
            // Email user
        }
        res.json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong' }) // Todo: handle error better
    }
}

export default {
    getGoogleAuthUrl,
    getAuthRedirectUrl,
    getGoogleCallBackUrl,
}


// Todo: use express-validator
// function generateToken(user) {
//     return jwt.sign(user, SECRET, {
//         expiresIn: 10080
//     })
// }

// function setUserInfo(request) {
//     return {
//         _id: request._id,
//         email: request.email,
//         role: request.role
//     }
// }

// export const emailLogin = async (req: Request, res: Response, next: NextFunction) => {
//     const { user, pass } = req.body
//     if (!user || !pass) {
//         return res.status(400).json({
//             message: 'All fields are required'
//         })
//     }
//     const loggedIn = await usersService.tryRegisterOrLoginUsingEmail(user.toLowerCase(), pass)
//     if (!loggedIn) {
//         return res.status(401).json({
//             message: 'Invalid credentials'
//         })
//     }
//     // const userInfo = setUserInfo(uuser)
//     res.status(200).json(loggedIn)
// }

// export const roleAuthorization = (roles) => {
//     return (req, res, next) => {
//         var user = req.user
//         user.findById(user._id, (err, foundUser) => {
//             if (err) {
//                 res.status(422).json({ error: 'No user found.' })
//                 return next(err)
//             }
//             if (roles.indexOf(foundUser.role) > -1) {
//                 return next()
//             }
//             res.status(401).json({ error: 'You are not authorized to view this content' })
//             return next('Unauthorized')
//         })
//     }
// }