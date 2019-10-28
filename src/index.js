import { start } from '@thi.ng/hdom'
import { bus, state } from './bus'
import { button } from './components'
import { theme } from './styles'

start(
    ctx =>
        ctx.bus.processQueue()
            ? [
                  'div',
                  [button, null, 'hello world'],
                  ['div', { style: { margin: '10px', height: '10px' } }],
                  [button, null, 'hello again']
              ]
            : null,
    {
        ctx: { state, bus, theme }
    }
)
bus.dispatch(['init'])
