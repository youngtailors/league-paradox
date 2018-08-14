<template>
  <div
    class="radio-input"
    role="radiogroup"
  >
    <radio-option
      v-for="(option, id) in options"
      :key="id"
      :checked="option === selected"
      :disabled="disabled"
      @change="change(option)"
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
      type: String,
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
  },
  methods: {
    change (value) {
      this.$emit('select', value)
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
