<template>
  <nav class="navigation">
    <slot />
  </nav>
</template>

<script>
export default {
  name: 'lu-navbar'
}
</script>

<style lang="stylus" scoped>
.navigation
  display flex
  width 100%
  align-items center
</style>
