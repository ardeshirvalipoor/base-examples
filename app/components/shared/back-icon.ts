import { Ghost, ghostify } from '../../base/components/advanced/ghost/ghost'
import { Base } from '../../base/components/base'
import router from '../../base/lib/router'
import { MenuIconBar } from './menu-icon/menu-icon-bar'
import { CENTER } from '../../base/helpers/style'
import _emitter  from '../../base/utils/emitter'
import { PASSIVE } from '../../base/utils/passive-support'

export const BackIcon = () => {

    const height = 2
    const base = Base('div')
    const top = MenuIconBar(height)
    const bottom = MenuIconBar(height)

    _emitter.on('route-changed', (r: string) => r == '/' ? hide() : show())
    base.el.onclick = () => router.back()

    top.style({
        bottom: '5px',
        width: '14px',
        backgroundColor:'black',

        // right: '10px',
        position: 'absolute',
        transform: `rotateZ(45deg)`
    })
    bottom.style({
        top: '6px',
        width: '14px',
        backgroundColor:'black',

        // right: '10px',
        position: 'absolute',
        transform: `rotateZ(-45deg)`
    })

    const ghost = Ghost({ bg: 'white' })
    base.el.addEventListener('touchstart', (e) => {
        ghost.activate(e.touches[0].pageX, e.touches[0].pageY)
        base.style({
            transform: 'scale(.9)'
        })
    }, PASSIVE)
    base.el.addEventListener('touchend', () => {
        ghost.deactivate()
        base.style({
            transform: 'scale(1)'
        })
    })
    base.append(top, bottom, ghost)

    base.cssClass({
        position: 'fixed',
        left: `0`,
        top: `0`,
        margin: '20px',
        width: '22px',
        height: '22px',
        transition: 'all .16s',
        zIndex: '99999',
        opacity: '0',
        transform: 'translateY(50px) rotateX(180deg)',
        ...CENTER
    })
    ghostify(base)
    function show() {
        base.style({
            opacity: '1',
            transform: 'translateY(0) rotateX(0deg)'
        }, {delay: 260})
    }
    function hide() {
        base.style({
            opacity: '0',
            transform: 'translateY(50px) rotateX(180deg)'
        })
    }


    return base
}