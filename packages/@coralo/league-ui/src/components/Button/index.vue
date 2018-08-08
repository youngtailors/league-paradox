<template>
  <div
    tabindex="0"
    ref="root"
    :class="[
      'button',
      ...classname
    ]"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @click="onClick"
    >
    <div class="button-bg" />
    <div class="border-idle" />
    <div class="border-transition" />
    <div class="flare" />
    <div class="glow" />
    <div class="sheen-wrapper" >
      <div class="sheen" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hover: false,
      down: false,
      click: false,
      clickEnd: null
    }
  },
  mounted () {
    document.addEventListener('mouseup', this.onMouseUp, false)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('mouseup', this.onMouseUp, false)
    })
  },
  computed: {
    classname () {
      if (this.disabled) return { disabled: this.disabled }
      return {
        hover: this.hover,
        down: this.down,
        click: this.click
      }
    }
  },
  methods: {
    playAnim () {
      if (this.click) {
        clearTimeout(this.clickEnd)
        this.click = false
        return this.$nextTick(() => {
          this.playAnim()
        })
      }
      if (typeof window === 'undefined') return

      // Don't block animation if user decides to spam
      window.requestAnimationFrame(() => {
        this.click = true
        this.$nextTick(() => {
          this.clickEnd = setTimeout(() => {
            this.click = false
          }, 300)
        })
      })
    },
    onClick () {
      if (!this.disabled) {
        this.playAnim()
        this.$emit('click')
      }
    },
    onMouseDown () {
      this.down = true
    },
    onMouseUp (evt) {
      const mouseIsOnButton = this.$refs.root.contains(evt.target)
      this.down = false
      this.hover = mouseIsOnButton
    },
    onMouseOver () {
      this.hover = true
    },
    onMouseOut () {
      this.hover = this.down
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styl/variables.styl'
@import '../../assets/styl/mixins.styl'

.button
  display inline-block
  position relative
  font-family font-family
  text-transform uppercase
  color lcu-gold-medium
  font-weight bold
  letter-spacing 1px
  white-space nowrap
  padding 9px 21px
  cursor pointer
  box-shadow 0 0 1px 1px #010A13, inset 0 0 1px 1px #010A13
  background #1E2328
  border 2px solid transparent

  *
    box-sizing content-box

  &, & > div
    cursor pointer
    user-select none
    outline none

  .content
    position relative

  .button-bg
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    transition opacity 400ms cubic-bezier(0, 0, 0.33, 1)
    opacity 0
    backface-visibility hidden
    background-image linear-gradient(to bottom, #1E232A 0%, #1E232A 40%, rgba(118, 97, 51, 0.8) 140%)

  .border-idle
    border-mixin()
    pointer-events none
    opacity 1
    border 2px solid transparent
    border-image linear-gradient(to top, #785B28 0%, #C89C3C 55%, #C8A355 71%, #C8AA6E 100%)
    border-image-slice 1
    transition opacity 300ms linear

  .border-transition
    border-mixin()
    pointer-events none
    opacity 0
    border 2px solid transparent
    transition border-color 300ms linear, opacity 300ms linear

  /* SFX */
  .glow
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    filter blur(4px)

  .flare
    &::before
      content ''
      position absolute
      top -25px
      left -25px
      width 48px
      height 48px
      opacity 0
      background transparent url('./sheen.png') top center no-repeat
      pointer-events none

    &::after
      content ''
      position absolute
      bottom -25px
      right -25px
      width 48px
      height 48px
      opacity 0
      background transparent url('./sheen.png') top center no-repeat
      pointer-events none

  .sheen-wrapper
    position absolute
    top 0
    left 0
    overflow hidden
    width 100%
    height 100%
    pointer-events none

    .sheen
      position absolute
      top 0
      left 0
      overflow hidden
      width 100%
      height 150%
      transform translateY(-100%)
      pointer-events none
      background linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 92%, rgba(255, 255, 255, 0) 100%)
      filter blur(2px)

  // Hover state
  &.hover
    color #F0E6D2
    animation hover-text-shadow 600ms cubic-bezier(0, 0, 0.33, 1) 1

    .border-transition
      opacity 1
      border-image linear-gradient(
        to top,
        rgb(78.4%, 61.2%, 23.5%) 0%,
        rgb(86.3%, 75.7%, 53.3%) 50%,
        rgb(88.2%, 78.8%, 59.6%) 71%,
        rgb(94.1%, 90.2%, 84.7%) 100%
      )
      border-image-slice 1

    .glow
      animation hover-glow 600ms cubic-bezier(0, 0, 0.33, 1) 1

    .button-bg
      opacity 1

  // Down state
  &.down
    color #5C5B57
    transition color 100ms linear
    animation none

    .button-bg
      opacity 1

  // Click state
  &.click
    color #E4E1D8
    border-image linear-gradient(to top, #FFFFFF 0%, #FFFFFF 33%, #FFFFFF 66%, #FFFFFF 100%)
    border-image-slice 1
    animation click-scale 130ms linear 1, hover-text-shadow 400ms linear 1

    .border-transition
      border-image linear-gradient(to top, #C89C3C 0%, #DCC188 50%, #E1C998 71%, #F0E6D8 100%)
      border-image-slice 1
      transition opacity 400ms linear
      opacity 1

    .glow
      animation hover-glow 600ms cubic-bezier(0, 0, 0.33, 1) 1

    .sheen
      animation click-sheen 330ms 1 linear

    .buttonbg
      opacity 1

    .flare
      &::before
        animation clickFlare 400ms cubic-bezier(0, 0, 0.33, 1) 0ms 1

      &::after
        animation clickFlare 400ms cubic-bezier(0, 0, 0.33, 1) 30ms 1

  &.disabled
    cursor default
    color lcu-text-disabled
    background-color lcu-bg-disabled
    border-image initial

    *
      cursor default
      animation none

    .flare, .glow, .sheen-wrapper, .button-bg
      display none

    .border-transition
      border-color #5C5B57
      opacity 1

    .border-idle
      opacity 0

  @keyframes hover-text-shadow
    0%
      text-shadow 0 0 4px #F0E6D8

    50%
      text-shadow 0 0 4px rgba(240, 230, 216, 0.5)

    100%
      text-shadow 0 0 4px rgba(240, 230, 216, 0)

  @keyframes hover-glow
    0%
      box-shadow 0 0 5px 4px rgba(240, 230, 216, 0.5), 0 0 2px 1px rgba(240, 230, 216, 0.5) inset

    50%
      box-shadow 0 0 5px 4px rgba(240, 230, 216, 0.3), 0 0 2px 1px rgba(240, 230, 216, 0.3) inset

    100%
      box-shadow 0 0 5px 4px rgba(240, 230, 216, 0), 0 0 2px 1px rgba(240, 230, 216, 0) inset

  @keyframes clickFlare
    0%
      opacity 0

    25%
      opacity 0.6

    50%
      opacity 0.3

    100%
      opacity 0

  @keyframes click-scale
    from
      transform scale(0.94)

    to
      transform scale(1)

  @keyframes click-sheen
    from
      transform translateY(-100%) rotate(0deg)

    10%
      transform translateY(-80%) rotate(-5deg)

    to
      transform translateY(100%) rotate(0deg)
</style>
