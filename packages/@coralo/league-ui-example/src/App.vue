<template>
  <div>
    <section>
      <h1>Button</h1>
      <h3>Normal Button</h3>
      <lu-btn @click="btnClick">Hextech</lu-btn>
      <h3>Disabled Button</h3>
      <lu-btn disabled>Tìm trận</lu-btn>
    </section>
    <section>
      <h1>Button Group</h1>
      <lu-btn-group>
        <lu-btn @click="btnClick">Button 1</lu-btn>
        <lu-btn @click="btnClick">Button 2</lu-btn>
        <lu-btn disabled @click="btnClick">Button 3</lu-btn>
      </lu-btn-group>
    </section>
    <section>
      <h1>Checkbox</h1>
      <h3>Active</h3>
      <p>
        Checkbox Status: {{ checked }}
      </p>
      <lu-checkbox v-model="checked">Hextech</lu-checkbox>
      <h3>Disabled</h3>
      <lu-checkbox disabled>Disabled</lu-checkbox>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      checked: false
    }
  },
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
  background-attachment fixed
  color rgb(94.1%, 90.2%, 82.4%)
  font-family 'Roboto', sans-serif
</style>
