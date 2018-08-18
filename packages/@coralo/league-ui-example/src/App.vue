<template>
  <div>
    <navbar />
    <landing />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Landing from './views/Landing'

export default {
  components: {
    Navbar,
    Landing
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
  box-sizing border-box

body
  background-color #171817
  color #c4b998
  font-family 'Beaufort'
  font-weight 400

.headline
  text-transform uppercase
  color #b59758
  font-weight bold
  font-size 32px
  margin-top 0
  margin-bottom 32px
  text-transform uppercase
  letter-spacing 6px

  &::after
    content ''
    display block
    width 60px
    height 1px
    background-color #525048
    margin-top 25px

.title
  text-transform uppercase
  font-weight 500
  font-size 26px
  text-transform uppercase
  letter-spacing 4px
  margin-bottom 20px

.subtitle
  position relative
  width fit-content
  margin 25px 76px 25px 0px
  font-size 16px
  letter-spacing 1px
  text-transform uppercase

  &::after
    content ''
    display inline-block
    position absolute
    top calc(50% - 2px)
    width 56px
    height 7px
    margin 0 10px
    background-image url('./assets/images/diamond-arrow-left.png')
    background-size 100%

  &::after
    left 100%
    transform rotate(180deg)

blockquote
  border-left 3px solid #c4b998
  margin-top 15px
  padding 15px
  font-size 16px
  background #c4b99812
</style>
