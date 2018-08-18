<template>
  <section class="hero">
    <div class="inner">
      <p class="text pre">The UI Components Of</p>
      <img
        class="image"
        src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/artbook/en_US/f31d8b829b603b4b65fdff2475bd0803ced0179d/assets/content/introduction/riot-presents/lol.png" 
        width="300"
        height="112"
        alt="league of legend logo">
      <p class="text post">For Vue JS</p>
      <p class="text fine">(React is coming soon)</p>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
.hero
  position relative
  display flex
  justify-content center
  align-items center
  margin-top -82px
  height 100vh
  min-height 500px

  &::after
    content ''
    background-image url('../assets/images/separator.svg')
    background-repeat no-repeat
    background-position center
    position absolute
    max-width 700px
    height 50px
    bottom 0
    margin-left auto
    margin-right auto
    left 0
    right 0

  .inner
    .text
      font-size 20px
      font-weight 500
      text-align center
      text-transform uppercase
      letter-spacing 3px

      &.pre
        margin-bottom 45px

      &.post
        margin-top 45px

      &.fine
        margin-top 10px
        font-size 10px
        font-weight normal
</style>
