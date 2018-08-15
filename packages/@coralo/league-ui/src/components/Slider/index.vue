<template>
  <div
    ref="root"
    :class="[
      'slider-input',
      {
        disabled
      }
    ]"
  >
    <input
      :disabled="disabled"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      type="range"
      @input="handleChange"
    >
    <div class="control">
      <div class="fill" style="width: 100%" />
      <div class="track" />
      <handle
        :style="{ left: handleOffsetLeft }"
        class="handle"/>
    </div>
  </div>
</template>

<script>
import Handle from './Handle'

export default {
  name: 'lu-slider',
  components: {
    Handle
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      required: true
    },
    tooltip: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      width: 0,
      showTooltip: false
    }
  },
  computed: {
    left () {
      return `${this.value / this.max * 100}%`
    },
    handleOffsetLeft () {
      return `calc(${this.left} - 15px)`
    }
  },
  methods: {
    handleChange (evt) {
      const newValue = parseInt(evt.target.value, 10)
      this.$emit('change', newValue)
    }
  }
}
</script>

<style lang="stylus" scoped>
fill = linear-gradient(to left, #695625, #463714)
fill-hover = linear-gradient(to right, #785a28 0%, #c89b3c 56%, #c8aa6e 100%)
fill-active = linear-gradient(to right, #695625, #463714)

.slider-input
  position relative
  display inline-block
  line-height 0
  width 100%

  input[type='range']
    opacity 0
    outline none
    height 30px
    width 100%
    /* Ideally this would be 'none' but it breaks IE/Edge
    because it doesn't seem to care about pointer events in ::thumb */
    pointer-events auto

    &::thumb
      position relative
      background-color rgba(255, 0, 0, 0.5)
      border-radius 5px
      height 30px
      width 30px
      pointer-events auto

    &:focus + .control .handle > polygon
      fill url('#hextech-handle-hover')

    &:hover + .control
      & .fill
        background fill-hover

      .handle > polygon
        fill url('#hextech-handle-hover')

    &:active + .control
      & .fill
        background fill-active

      .handle > polygon
        fill url('#hextech-handle-active')

    &::track
      border 0
      width 100%
      margin-right -1px
      pointer-events none

  .track
    position absolute
    top 0
    bottom 0
    margin auto
    background rgb(30, 35, 40)
    height 2px
    width 100%
    z-index 0
    pointer-events none

  .fill
    position absolute
    top 0
    bottom 0
    margin auto
    margin-right 1px
    height 3px
    background fill
    z-index 1
    pointer-events none

  .handle
    position absolute
    top 0
    bottom 0
    margin auto
    height 30px
    width 30px
    pointer-events none
    z-index 2

  .tooltip
    position absolute
    opacity 0
    transition opacity 0.15s ease-in

    &.show
      opacity 1
      transition opacity 0.3s ease-in 0.15s

  &.disabled
    input[type='range']
      background rgb(30, 35, 40)

      & + .control .handle > polygon
        fill #5c5b57

    .fill
      display none

    .tooltip
      display none
</style>
