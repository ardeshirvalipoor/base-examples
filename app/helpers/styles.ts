import { ABSOLUTE, EASE, HIDE, SHOW, Y } from '../base/helpers/style'
import { CS } from '../base/interfaces/style'

export default {
    PAGE_BASE_STYLE: {
        ...EASE(.16),
        ...HIDE,
        ...Y(60),
        ...ABSOLUTE,
        top: 'env(safe-area-inset-top)',
        zIndex: '9999',
        willChange: 'opacity,transform',
    },
    PAGE_EXIT_STYLE: {
        ...HIDE,
        ...Y(60)
    },
    PAGE_ENTER_STYLE: {
        ...SHOW,
        ...Y(0)
    },
    PAGE_EXIT_UP_STYLE: {
        ...HIDE,
        ...Y(-60)
    },
    PAGE_EXIT_DESKTOP: {
        ...HIDE,
        ...Y(0)
    },
    PAGE_ENTER_DESKTOP: {
        ...SHOW,
        ...Y(0)
    },
} as { [key: string]: CS }
