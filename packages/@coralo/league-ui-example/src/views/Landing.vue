<template>
  <div>
    <hero />
    <div class="landing">
      <div class="container">
        <div class="headline">Basic Component</div>
        <section>
          <div class="title">Button</div>
          <div class="subtitle">Normal Button</div>
          <lu-btn @click="btnClick">Hextech</lu-btn>
          <div class="subtitle">Disabled Button</div>
          <lu-btn disabled>Tìm trận</lu-btn>
        </section>
        <section>
          <div class="title">Button Group</div>
          <lu-btn-group>
            <lu-btn @click="btnClick">Button 1</lu-btn>
            <lu-btn @click="btnClick">Button 2</lu-btn>
            <lu-btn disabled @click="btnClick">Button 3</lu-btn>
          </lu-btn-group>
        </section>
        <section>
          <div class="title">Checkbox</div>
          <div class="subtitle">Active</div>
          <lu-checkbox v-model="checked">Hextech</lu-checkbox>
          <blockquote>
            <strong>Checkbox Status:</strong> {{ checked }}
          </blockquote>
          <div class="subtitle">Disabled</div>
          <lu-checkbox disabled>Disabled</lu-checkbox>
        </section>
        <section class="input-section">
          <div class="title">Text Input</div>
          <blockquote>
            <strong>Message</strong>: {{ text }}
          </blockquote>
          <div class="subtitle">Normal</div>
          <lu-input
            v-model="text"
            placeholder="Hextech..."
          />
          <div class="subtitle">Disable</div>
          <lu-input
            v-model="text"
            placeholder="Hextech..."
            disabled />
          <div class="subtitle">Search</div>
          <lu-input
            v-model="text"
            placeholder="Hextech..."
            type="search" />
          <div class="subtitle">With Clear</div>
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
            v-model="selected"
            :options="options"
          />
          <h3>Disabled</h3>
          <lu-dropdown
            :disabled="true"
            :options="options"
            v-model="selected"
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
          <h3>Normal with step (step = 1)</h3>
          <lu-slider
            :step="1"
            v-model="slider" />
          <h3>With Tooltip</h3>
          <lu-slider
            :tooltip="true"
            v-model="slider" />
          <h3>Disabled</h3>
          <lu-slider
            :disabled="true"
            v-model="slider" />
        </section>
        <lu-navbar>
          <lu-nav-item
            :active="true"
            href="/"
          >Home</lu-nav-item>
          <lu-nav-item href="/shop">Shop</lu-nav-item>
        </lu-navbar>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero'

export default {
  components: {
    Hero
  },
  data () {
    return {
      checked: false,
      text: '',
      selected: -1,
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

<style lang="stylus" scoped>
.landing
  display grid
  grid-template-columns 80px 1fr 80px

.container
  grid-column 2 / 3

.input-section
  max-width 600px

.body
  padding 50px

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
