<template>
  <div class="card">
    <div class="content-wrapper">
      <div class="content">
        <slot name="header"/>
        <slot />
      </div>
      <slot name="button" />
    </div>
    <div
      :class="`border ${borders}`" />
  </div>
</template>

<script>
export default {
  name: 'lu-card',
  props: {
    borders: {
      type: String,
      default: 'top bottom'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styl/variables.styl'

.card
  border 2px solid transparent
  border-image linear-gradient(to top, #614A1F 0, #463714 5px, #463714 100%) 1 stretch
  position relative
  background rgb(0.4%, 3.9%, 7.5%)
  box-shadow 0 0 0 1px rgba(1, 10, 19, 0.48)
  box-sizing border-box

  &::before
    content ''
    position absolute
    width calc(100% + 4px)
    height calc(100% + 4px)
    top -2px
    left -2px
    box-shadow 0 0 10px 1px rgba(0, 0, 0, 0.5)
    pointer-events none

  .content-wrapper
    .content
      color lcu-text-dark
      padding 18px
      width 100%
      text-align center
      box-sizing border-box

      & h2
        color lcu-gold
        font-weight 700
        line-height 22px
        letter-spacing 0.05rem
        margin-top -2px

      & p
        font-weight normal
        line-height 1rem
        letter-spacing 0.025rem
        margin 0

        &:last-child
          margin-bottom -2px

    .button-group
      margin-bottom -2px
      width 100%
      justify-content center

  .border
    &::before, &::after
      position absolute
      box-sizing border-box
      left 12px
      right 12px
      height 0
      border-style solid
      border-width 4px 4px 0 4px
      border-image-width 4px 4px 0 4px
      border-image-slice 4 4 0 4
      border-image-repeat stretch

    &.top::before
      content ''
      top -6px
      border-image-source url('./sub-border-secondary-horizontal.png')

    &.bottom::after
      content ''
      bottom -6px
      border-image-source url('./sub-border-primary-horizontal.png')
</style>
