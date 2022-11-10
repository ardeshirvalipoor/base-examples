import { Ghost, ghostify } from '../../../base/components/advanced/ghost/ghost'
import { Base } from '../../../base/components/base'
import router from '../../../base/lib/router'
import emitter from '../../../base/utils/emitter'
import { MenuIconBar } from './menu-icon-bar'
import { CENTER } from '../../../base/helpers/style'
import configs from '../../../configs'

export const MenuIcon = () => {

    const height = 3
    const base = Base()
    const top = MenuIconBar(height)
    const middle = MenuIconBar(height)
    const bottom = MenuIconBar(height)


    emitter.on('route-changed', (r: string) =>  r.split('?')[0] === '/' ? show() : hide())
    base.el.onclick = () => {
        router.goto('/menu')
    }

    ghostify(base, {bg: 'white'});
    base.append(top, middle, bottom)

    base.cssClass({
        // backgroundColor: 'gray',
        width: '60px',
        height: '59px',
        padding: '20px',
        transition: 'all .16s',
        zIndex: '99999',
        ...CENTER,
        flexDirection: 'column',
        justifyContent: 'space-between'
    })

    function collapse() {
        top.style({
            top: '14px',
            right: '17px',
            transform: `rotateZ(-45deg)`
        })
        middle.style({
            right: '10px'
        })
        bottom.style({
            bottom: '14px',
            right: '17px',
            transform: `rotateZ(45deg)`
        })
    }
    function show() {
        base.style({
            opacity: '1',
            transform: 'translateY(0)'
        }, {delay: 100})
    }
    function hide() {
        base.style({
            opacity: '0',
            transform: 'translateY(-60px)'
        })
    }

    function expand() {
        top.style({
            top: 11 + 'px',
            right: '10px',
            transform: `rotateZ(0deg)`
        })
        middle.style({
            top: (configs.sizes.TOP_MARGIN - 3 * height) / 2 + height + 10 + 'px',
            right: '14px'
        })
        bottom.style({
            bottom: 11 + 'px',
            right: '8px',
            transform: `rotateZ(0deg)`
        })

    }
    return {
        ...base,
        collapse,
        expand

    }
}