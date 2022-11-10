import { ghostify } from '../../base/components/advanced/ghost/ghost'
import { Button } from "../../base/components/native/button"
import { S } from "../../base/helpers/style"
import { PASSIVE } from '../../base/utils/passive-support'
import configs from '../../configs'

export const DButton = (text: string, options: any = {}) => {
    const base = Button(text)

    base.el.addEventListener('touchstart', () => {
        base.style(S(.95))
    }, PASSIVE)
    base.el.addEventListener('touchend', () => {
        base.style(S(1))
    })
    base.el.addEventListener('touchcancel', () => {
        base.style(S(1))
    })
    if (options.disabled) base.disable()
    if (options.gray) {
        base.style({ backgroundColor: '#edededb3', boxShadow: 'none', color: '#a7a7a7' })
    }
    ghostify(base, { bg: 'white' })
    base.cssClass({
        fontSize: '16px',
        width: '100%',
        marginTop: '25px',
        backgroundColor: options.color || configs.colors.GREEN,
        border: '0',
        padding: '10px',
        boxShadow: '3px 3px 7px 0px #00000014',
        wordSpacing: '-3px',
        color: '#fff',
        position: 'relative',
        // height: '50px',
        borderRadius: '25px',
        height: '50px',
        fontWeight: '400',
        // ...EASE(.16),
        '&:disabled': {
            backgroundColor: '#0000002b',
        }
    })

    return base
}