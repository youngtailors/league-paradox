<template>
  <div class="button">
    <div class="button-bg" />
    <slot />
  </div>
</template>

<style lang="stylus" scoped>
@import '../variables.styl'

.button
  display inline-block
  position relative
  text-transform uppercase
  font-family font-family
  font-weight bold
  background #1E2328
  color lcu-gold-medium
  box-shadow 0 0 1px 1px #010A13, inset 0 0 1px 1px #010A13
  border 2px solid transparent
  letter-spacing 1px
  white-space nowrap
  padding 9px 21px
  cursor pointer

  &:hover
    color #F0E6D2
    animation hoverTextShadow 600ms cubic-bezier(0, 0, 0.33, 1) 1

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

@keyframes hoverTextShadow
  0%
    text-shadow 0 0 4px #F0E6D8

  50%
    text-shadow 0 0 4px rgba(240, 230, 216, 0.5)

  100%
    text-shadow 0 0 4px rgba(240, 230, 216, 0)

@keyframes hoverGlow
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

@keyframes clickScale
  from
    transform scale(0.94)

  to
    transform scale(1)

@keyframes clickSheen
  from
    transform translateY(-100%) rotate(0deg)

  10%
    transform translateY(-80%) rotate(-5deg)

  to
    transform translateY(100%) rotate(0deg)
</style>
