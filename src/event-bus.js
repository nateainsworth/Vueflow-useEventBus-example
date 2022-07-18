import { useEventBus } from '@vueuse/core'

export default {
  on: (eventName, ...args) => useEventBus(eventName).on(...args),
  once: (eventName, ...args) => useEventBus(eventName).once(...args),
  off: (eventName, ...args) => useEventBus(eventName).off(...args),
  emit: (eventName, ...args) => useEventBus(eventName).emit(...args),
  reset:(eventName) => useEventBus(eventName).reset(),
}
