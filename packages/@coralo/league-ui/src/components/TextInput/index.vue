<template>
  <div
    :class="[
      'input',
      {
        disabled
      }
    ]"
  >
    <i
      :class="[
        'clear',
        { show: showClear }
      ]"
      @click="onClear"
    />
    <input
      :disabled="disabled"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      class="input-element"
      @input="onInput"
      @blur="onBlur"
    >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'lu-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    hideClear: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showClear () {
      return this.hideClear ? false : this.value !== ''
    }
  },
  methods: {
    onInput (evt) {
      this.$emit('change', evt.target.value)
    },
    onBlur (evt) {
      if (!this.disabled) {
        this.$emit('blur')
      }
    },
    onClear () {
      this.$emit('change', '')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styl/variables.styl'

.input
  display inline-block
  width 100%
  position relative
  font-family 'Spiegel'

  .clear
    position absolute
    top 0
    right 7px
    bottom 0
    margin auto
    font-size 1.3em
    transition opacity 0.2s ease-out, visibility 0.2s ease-out
    background-color darken(lcu-text-light, 10%)
    cursor pointer
    mask-image url('./close.svg')
    height 0.8em
    width 0.8em
    z-index 10
    opacity 0
    visibility hidden

    &:hover
      background-color lighten(lcu-text-light, 10%)

    &:active
      background-color #785A28

    &.show
      opacity 1
      visibility visible

  input[type='search']
    background-image url('./search-icon.png')
    background-size 1.3em
    background-position 5px center
    background-repeat no-repeat
    padding-left 1.8em

    &:focus
      background 5px center / 1.3em url('./search-icon.png'), linear-gradient(to bottom, rgba(7, 16, 25, 0.7), rgba(32, 39, 44, 0.7))
      background-repeat no-repeat

  input[type='search']::-webkit-search-decoration, input[type='search']::-webkit-search-cancel-button, input[type='search']::-webkit-search-results-button, input[type='search']::-webkit-search-results-decoration
    display none

  .input-element
    padding 10px 21px
    color lcu-text-dark
    display block
    box-sizing border-box
    border 1px solid #785A28
    background-color rgba(0, 0, 0, 0.7)
    appearance none
    outline none
    box-shadow 0 0 0 1px rgba(0, 0, 0, 0.25) inset, 0 0 0 1px rgba(0, 0, 0, 0.25)
    width 100%

    &:focus
      background linear-gradient(to bottom, rgba(7, 16, 25, 0.7), rgba(32, 39, 44, 0.7))
      border-image linear-gradient(to bottom, #785a28, #c8aa6e) 1 stretch

    &:placeholder-shown
      font-size 1em

  &.disabled
    .input-element, .input-element:focus
      background #1e2328
      border-image none
      border-color #3c3c41
</style>
