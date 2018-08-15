<template>
  <div
    class="radio-input"
    role="radiogroup"
  >
    <radio-option
      v-for="(option, id) in options"
      :key="id"
      :checked="id === selected"
      :disabled="disabled"
      @change="$emit('select', id)"
    >
      {{ option }}
    </radio-option>
  </div>
</template>

<script>
import RadioOption from './RadioOption'

export default {
  name: 'lu-radio',
  components: {
    RadioOption
  },
  model: {
    prop: 'selected',
    event: 'select'
  },
  props: {
    selected: {
      type: Number,
      required: true
    },
    options: {
      type: Array,
      default: () => ([])
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.radio-input
  display flex
  flex-direction column
  justify-content center
  outline none
</style>
