import app from './app'
import router from './base/lib/router'
import { PASSIVE } from './base/utils/passive-support'
import db from './services/db'

db.init().then(() => {
    document.body.appendChild(app.el)
})
document.addEventListener('touchstart', () => false, PASSIVE)
