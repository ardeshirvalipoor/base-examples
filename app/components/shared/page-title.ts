import { Base } from '../../base/components/base'
import { Div } from "../../base/components/native/div"
import { EASE } from '../../base/helpers/style'

export const PageTitle = (text: string) => {
    const base = Base()
    const _title = Div(text)
    base.cssClass({
        position: 'relative',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '18px',
        wordSpacing: '-3px',
        height: '60px',
        backgroundColor: 'white',//COLORS.MAIN,
        padding: '22px 20px 0 60px',
        boxShadow: '0 0 6px #00000000',
        ...EASE(.24)
    })
    base.append(_title)


    return Object.assign(base, {
        handleShadow(scroll: number) {
            base.style({ boxShadow: scroll > 10 ? '0 0 10px #00000012' : '0 0 10px #00000000' })
        },
        text(txt: string) {
            _title.text(txt)
        }
    })
}