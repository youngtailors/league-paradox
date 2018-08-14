import * as components from './components'

export default {
  install (v) {
    for (let _ in components) {
      v.component(components[_].name, components[_])
    }
  }
}
