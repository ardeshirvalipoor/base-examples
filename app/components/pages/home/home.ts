import router, { IRoute, IRouteParams } from '../../../base/lib/router'
import { Div } from '../../../base/components/native/div'
import { waitFor } from '../../../base/utils/wait'
import { HomeHeader } from './home-header'
import { PageContents } from '../../shared/page-contents'
import helpers from '../../../helpers'

export const HomePage = () => {

    const base = Div()
    const header = HomeHeader()
    const contents = PageContents()
    base.append(header, contents)
    contents.on('scroll', header.toggleShadow)


    base.cssClass(helpers.styles.PAGE_BASE_STYLE)

    function exit({ to = '' }: IRouteParams) {
        base.style(helpers.styles.PAGE_EXIT_UP_STYLE)
    }

    async function enter({ query, from, to, data }: IRouteParams) {
        await waitFor(200)
        base.style(helpers.styles.PAGE_ENTER_STYLE)
    }

    return Object.assign(base, { enter, exit })
}