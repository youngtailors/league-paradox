<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <img src="../assets/images/logo.svg">
    </div>
    <lu-navbar>
      <lu-nav-item
        :active="true"
        href="/">League UI</lu-nav-item>
      <lu-nav-item class="nav-right">
        Github
      </lu-nav-item>
    </lu-navbar>
  </nav>
</template>

<style lang="stylus" scoped>
.navbar
  display flex
  padding 25px

  .navbar-brand
    width 32px
    height 32px
    margin-right 30px

  .nav-right
    margin-left auto
</style>
