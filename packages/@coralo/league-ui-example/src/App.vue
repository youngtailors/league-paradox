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
      <lu-input
        v-model="text"
        placeholder="Hextech..."
      />
      <h3>Disable</h3>
      <lu-input
        v-model="text"
        placeholder="Hextech..."
        disabled />
      <h3>Search</h3>
      <lu-input
        v-model="text"
        placeholder="Hextech..."
        type="search" />
      <h3>With Clear</h3>
      <lu-input
        v-model="text"
        placeholder="Hextech..."
        hide-clear
      />
    </section>
    <section>
      <h1>Dropdown</h1>
      <h3>Active</h3>
      <lu-dropdown
        :options="options"
      />
      <h3>Disabled</h3>
      <lu-dropdown
        :disabled="true"
        :options="options"
        placeholder="This is placeholder"
      />
    </section>
    <section>
      <h1>Radio</h1>
      <h3>Active</h3>
      <lu-radio
        :options="options"
        v-model="selected"
      />
      <h3>Disabled</h3>
      <lu-radio
        :disabled="true"
        v-model="selected"
        :options="options"
      />
    </section>
    <section class="card">
      <h1>Card</h1>
      <h3>Title and Body</h3>
      <div class="demo">
        <lu-card>
          <h2 slot="header">Header</h2>
          This is a question of utmost importance, please answer honestly
        </lu-card>
      </div>
      <h3>Custom Body</h3>
      <div class="demo">
        <lu-card>
          <lu-radio
            :options="options"
            v-model="selected"
          />
        </lu-card>
      </div>
      <h3>With Button</h3>
      <div class="demo">
        <lu-card>
          <h2 slot="header">Header</h2>
          <p>This is a question of utmost importance, please answer honestly</p>
          <lu-btn-group slot="button">
            <lu-btn @click="btnClick">Hextech</lu-btn>
            <lu-btn @click="btnClick">Vue</lu-btn>
          </lu-btn-group>
        </lu-card>
      </div>
    </section>
    <section>
      <h1>Slider</h1>
      <h3>Normal</h3>
      <lu-slider v-model="slider" />
      <h3>Normal with step</h3>
      <lu-slider v-model="slider" />
      <h3>With Tooltip</h3>
      <lu-slider v-model="slider" />
      <h3>Disabled</h3>
      <lu-slider
        :disabled="true"
        v-model="slider" />
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      checked: false,
      text: '',
      selected: 'Jinx',
      options: ['Jinx', 'Leona', 'Renekton', 'Quinn'],
      slider: 0
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
  padding 50px

.input-section
  max-width 600px

input
  font-size 100%

section
  margin-bottom 50px

  &.card
    .demo
      display flex
      width 100%
      height 100%
      justify-content center
      align-items center

  h3
    text-transform uppercase
    font-weight 400
</style>
