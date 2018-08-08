import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Checkbox from './components/Checkbox'
import TextInput from './components/TextInput'

export { Button, ButtonGroup, Checkbox, TextInput }

export default {
  install (v) {
    v.component('lu-btn', Button)
    v.component('lu-btn-group', ButtonGroup)
    v.component('lu-checkbox', Checkbox)
    v.component('lu-input', TextInput)
  }
}
