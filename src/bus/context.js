import * as I from '@thi.ng/interceptors'
import { Atom } from '@thi.ng/atom'

export const state = new Atom({})
export const bus = new I.EventBus(state, {
  init: () => ({
    [I.FX_STATE]: { count: 0 }
  }),
  'inc-count': [I.valueUpdater('count', x => x + 1)]
})
