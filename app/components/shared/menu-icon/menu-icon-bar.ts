import { Base } from '../../../base/components/base'

export const MenuIconBar = (height = 4) => {

    const base = Base('div')

    base.cssClass({
        width: '100%',
        height: height + 'px',
        backgroundColor: '#000',
        opacity: '.9',
        transition: 'all .2s'
    })

    return base
}