import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Checkbox from './components/Checkbox'

export { Button, ButtonGroup, Checkbox }

export default {
  install (v) {
    v.component('lu-btn', Button)
    v.component('lu-btn-group', ButtonGroup)
    v.component('lu-checkbox', Checkbox)
  }
}
