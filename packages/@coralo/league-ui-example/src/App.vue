<template>
  <div>
    <section>
      <h1>Button</h1>
      <h3>Normal Button</h3>
      <lu-btn @click="btnClick">Hextech</lu-btn>
      <h3>Disabled Button</h3>
      <lu-btn disabled>Tìm trận</lu-btn>
    </section>
  </div>
</template>

<script>

export default {
  methods: {
    btnClick () {
      console.log('Button clicked')
    }
  }
}
</script>

<style lang="stylus">
body
  background url('./backdrop.png')
  color rgb(94.1%, 90.2%, 82.4%)
</style>
