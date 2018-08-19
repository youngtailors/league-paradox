<template>
  <div class="button-group">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'lu-btn-group'
}
</script>

<style lang="stylus" scoped>
.button-group
  display inline-flex

  .content
    position relative
    padding 0 4px
    display flex

    & > div
      margin 0 2px

      &:first-child
        margin-left 0

      &:last-child
        margin-right 0

    &::before
      content ''
      position absolute
      left 0
      bottom 0
      border-right 2px solid #614A1F
      border-top 2px solid transparent
      height 10px

    &::after
      content ''
      position absolute
      right 0
      bottom 0
      border-left 2px solid #614A1F
      border-top 2px solid transparent
      height 10px
</style>
