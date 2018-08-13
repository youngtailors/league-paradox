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
    <section class="input-section">
      <h1>Text Input</h1>
      <p>
        <strong>Message</strong>: {{ text }}
      </p>
      <h3>Enable</h3>
      <lu-input v-model="text" />
      <h3>Disable</h3>
      <lu-input disabled v-model="text" />
      <h3>Search</h3>
      <lu-input type="search" v-model="text" />
      <h3>With Clear</h3>
      <lu-input hide-clear v-model="text" />
    </section>
    <section>
      <h1>Dropdown</h1>
      <lu-dropdown />
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      checked: false,
      text: ''
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

.input-section
  max-width 600px

input
  font-size 100%
</style>
