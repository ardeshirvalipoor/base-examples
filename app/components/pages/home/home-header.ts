import { Div } from '../../../base/components/native/div'
import { CENTER, WH, EASE, Y, SHOW, HIDE } from '../../../base/helpers/style'
import router from '../../../base/lib/router'
import { MenuIcon } from '../../shared/menu-icon/menu-icon'


export const HomeHeader = () => {

    const base = Div()
    const menuIcon = MenuIcon()
    const logo = Div('Todo app')
    const shadow = Div()

    base.append(menuIcon, logo, shadow)

    logo.cssClass({
        fontSize: '22px',
        color: '#333',
        display: 'flex',
        ...EASE(.24),
        '&.dark': {
            color: '#fff'
        }
    })
    shadow.cssClass({
        boxShadow: '0 0 5px #00000000',
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        height: '60px',
        transition: 'all .44s',
        pointerEvents: 'none',
    })
    base.cssClass({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'calc(66px + env(safe-area-inset-top))',
        padding: 'calc(0px + env(safe-area-inset-top)) 0 0',
        transition: 'all .44s',
        backgroundColor: '#fff',
        zIndex: '999999',
    })


    return Object.assign(
        base,
        {
            up() {
                base.style({ transform: 'translateY(calc(-76px - env(safe-area-inset-top)))' })
            },
            down() {
                base.style({
                    ...Y(0)
                })
            },
            toggleShadow(v: number) {
                shadow.style({ boxShadow: v > 10 ? '0 0 5px #00000014' : '0 0 5px #00000000' })
            }
        }
    )
}