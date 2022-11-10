import { Base } from '../../base/components/base'
import { Scrollable } from '../../base/utils/scrollable'

export const PageContents = (adjustedHeight = 0) => {
    const base = Scrollable(Base())

    base.cssClass({
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingRight: '20px',
        paddingBottom: '100px',
        paddingLeft: '20px',
        paddingTop: '20px',
        // maxWidth: '660px',
        margin: '0 auto',
        top: '0',
        backgroundColor: 'white',
        height: (window.innerHeight - adjustedHeight) + 'px',
        scrollBehavior: 'smooth',
        display: 'flex',
        flexDirection: 'column',
        zIndex: '1'
    })

    return base
}
