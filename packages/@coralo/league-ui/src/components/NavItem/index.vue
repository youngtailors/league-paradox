<template>
  <div class="nav-item-wrapper">
    <div
      :class="[
        'nav-item',
        {
          active
        }
      ]"
    >
      <span
        role="navigation"
        class="content"
        @click="handleClick"
      >
        <slot />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lu-nav-item',
  props: {
    href: {
      type: String,
      default: '#'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      if (!this.active) {
        console.log(`Go to ${this.href}`)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styl/variables.styl'

.nav-item-wrapper
  display flex
  cursor pointer
  margin-right 30px
  min-width 28px
  white-space nowrap
  text-overflow ellipsis

  .nav-item
    position relative
    color #CDBE91
    font-size 14px
    font-weight 700
    letter-spacing 0.075em
    text-transform uppercase
    font-family font-family
    transition text-shadow 0.3s ease-in-out

    &.active
      color #F0E6D2

      &::before
        content ''
        height 15px
        width 100%
        position absolute
        top -31px
        left -1px
        background-image url('./nav-caret.png')
        background-repeat no-repeat
        background-size contain
        background-position center
        pointer-events none

      &::after
        content ''
        width 150px
        height 45px
        position absolute
        top 1px
        margin-left -60px
        background-image url('./navigation-highlight.png')
        pointer-events none
        display block
        left calc(50% - 16px)
        background-size contain
        margin-top 4px

    .content
      display block
      text-align center
      cursor pointer
      line-height normal
</style>
