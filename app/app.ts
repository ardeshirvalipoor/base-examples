import { View } from './components/view'
import { HomePage }  from './components/pages/home/home'
import { MenuPage } from './components/pages/menu/menu'
import router from './base/lib/router'
import { BackIcon } from './components/shared/back-icon'
import { Div } from './base/components/native/div'
import configs from './configs'

const view = View()
const app = Div()
const backIcon = BackIcon()
app.append( backIcon, view)

app.cssClass({
    margin: '0 auto',
    transition: 'all .16s',
    overflow: 'hidden',
    position: 'relative',
    [`@media (max-width: ${configs.sizes.MOBILE}px)`]: {
        margin: '0 auto',
    }
})

const routes = {
    '/': HomePage,
    '/menu': MenuPage,
}

router.init({routes, view })

export default app
