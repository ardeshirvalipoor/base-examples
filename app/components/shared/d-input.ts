import { Base } from '../../base/components/base'
import { Div } from '../../base/components/native/div'
import { Input } from '../../base/components/native/input'
import { NUMBERS_DELIMITER_REGEX } from '../../base/helpers/regex'
import { EASE } from '../../base/helpers/style'

export const DInput = (placeholder: string, options: any = {}) => {
    const base = Base()

    const contents = Div()
    const i = Input('')
    const p = Div(placeholder)
    contents.append(i)
    contents.cssClass({
        display: 'flex',
        alignItems: 'center',
        flexDirection: options.inputAlign === 'right' ? 'row-reverse' : 'row'
    })
    base.append(contents, p)
    if (options.fixedPart) {
        const fix = Div(options.fixedPart)
        fix.cssClass({
            pointerEvents: 'none',
            flexShrink: '0',
            fontSize: (options.fontSize || 20) + 'px',
            opacity: '.5',
            // padding: options.inputAlign === 'right' ? '0 15px 0 0' : '0 0 0 15px',
        })

        contents.append(fix)
    }
    i.on('focus', () => base.style({ borderBottom: '1px solid #00000055' }))
    i.on('blur', () => base.style({ borderBottom: '1px solid #00000022' }))
    if (options.type === 'numeric') {
        i.el.setAttribute('inputmode', 'numeric')
        i.el.addEventListener('input', () => { // Todo: fix later
            const realValue = i.getValue().replace(/[^0-9\.]/g, '')
            base.emit('input', +realValue)
            i.setValue(realValue.toString()/* .replace('.','') */.replace(NUMBERS_DELIMITER_REGEX, ','))
            // const end = input.el.value.length;
            // input.el.setSelectionRange(end, end);
            // input.el.focus();
        })
        i.el.onclick = i.select
    }
    i.cssClass({
        backgroundColor: 'transparent',
        border: 'none',
        height: '50px',
        fontSize: (options.fontSize || 20) + 'px',
        wordSpacing: '0px',
        padding: options.fixedPart ? '0 7px' : '0px 0px',
        width: '100%',
        textAlign: options.inputAlign || (options.direction === 'rtl' ? 'right' : 'left'),
    })
    if (options.type) {
        i.el.setAttribute('type', options.type)
    }
    if (options.inputmode) {
        i.el.setAttribute('inputmode', options.inputmode)
    }
    p.cssClass({
        ...EASE(.16),
        width: '100%',
        fontSize: (options.placholderFontSize || 16) + 'px',
        wordSpacing: '-3px',
        position: 'absolute',
        top: '-15px',
        bottom: '42px',
        color: '#646464',
        right: '0',
        fontWeight: '100',
        lineHeight: (options.placholderFontSize || 16) + 'px',
        // padding: '0 3px',
        // backgroundColor: COLORS.MAIN,
        pointerEvents: 'none',
        textAlign: options.placeholderAlign || (options.direction === 'rtl' ? 'right' : 'left'),

    })
    base.cssClass({
        position: 'relative',
        borderBottom: '1px solid #00000022',
        height: '50px',
        // borderRadius: '15px'
    })
    return Object.assign(base, {
        getValue() { return i.getValue() },
        setValue(v: any) { return i.setValue(v) }
    }) // Todo: handle this
}