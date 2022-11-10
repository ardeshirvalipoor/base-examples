import { Div } from '../base/components/native/div'

export const View = () => {

    const base = Div() // Fragment later

    base.cssClass({
        position: 'relative',
        right: '0',
        height: '100vh',
        overflow: 'hidden',
        width: '100vw',
        maxWidth: '425px',
    })

    return base
}