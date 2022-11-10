import { Div } from '../../../base/components/native/div'
import { ABSOLUTE, HIDE, EASE, SHOW } from '../../../base/helpers/style'
import { IRouteParams } from '../../../base/lib/router'
import helpers from '../../../helpers'

export const MenuPage = () => {
    const base = Div()
    base.append(Div('Todo app'))
    base.cssClass({
        ...ABSOLUTE,
        padding: 'calc(env(safe-area-inset-top) + 22px) 60px',
        color: 'white',
        willChange: 'transform,opacity',
        ...HIDE
    })
    return {
        ...base,
        async exit({ to = '' }: IRouteParams) {
            base.style(helpers.styles.PAGE_EXIT_STYLE)
        },
        enter({ from = '' }: IRouteParams) {
            base.style(helpers.styles.PAGE_ENTER_STYLE)
        }
    }
}