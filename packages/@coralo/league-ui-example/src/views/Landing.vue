<template>
  <div>
    <hero />
    <div class="landing">
      <div class="container">
        <div class="headline">Basic Component</div>
        <section>
          <div class="title">Button</div>
          <div class="subtitle">Normal Button</div>
          <lu-btn @click="btnClick">Find Match</lu-btn>
          <div class="subtitle">Disabled Button</div>
          <lu-btn disabled>Find Match</lu-btn>
        </section>
        <section>
          <div class="title">Button Group</div>
          <lu-btn-group>
            <lu-btn @click="btnClick">League</lu-btn>
            <lu-btn @click="btnClick">Of</lu-btn>
            <lu-btn disabled @click="btnClick">Legend</lu-btn>
          </lu-btn-group>
        </section>
        <section>
          <div class="title">Checkbox</div>
          <div class="subtitle">Active</div>
          <lu-checkbox v-model="checked">New Skin</lu-checkbox>
          <blockquote>
            <strong>Checkbox Status:</strong> {{ checked }}
          </blockquote>
          <div class="subtitle">Disabled</div>
          <lu-checkbox disabled>Buy now</lu-checkbox>
        </section>
        <section class="input-section">
          <div class="title">Text Input</div>
          <blockquote>
            <strong>Message</strong>: {{ text }}
          </blockquote>
          <div class="subtitle">Normal</div>
          <lu-input
            v-model="text"
            placeholder="Placeholder..."
          />
          <div class="subtitle">Disable</div>
          <lu-input
            v-model="text"
            placeholder="Placeholder..."
            disabled />
          <div class="subtitle">Search</div>
          <lu-input
            v-model="text"
            placeholder="Placeholder..."
            type="search" />
          <div class="subtitle">With Clear</div>
          <lu-input
            v-model="text"
            placeholder="Placeholder..."
            hide-clear
          />
        </section>
        <section>
          <div class="title">Dropdown</div>
          <div class="subtitle">Normal</div>
          <lu-dropdown
            v-model="selected"
            :options="options"
          />
          <div class="subtitle">Disabled</div>
          <lu-dropdown
            :disabled="true"
            :options="options"
            v-model="selected"
            placeholder="This is placeholder"
          />
        </section>
        <section>
          <div class="title">Radio</div>
          <div class="subtitle">Normal</div>
          <lu-radio
            :options="options"
            v-model="selected"
          />
          <div class="subtitle">Disabled</div>
          <lu-radio
            :disabled="true"
            v-model="selected"
            :options="options"
          />
        </section>
        <section class="card">
          <div class="title">Card</div>
          <div class="subtitle">Normal</div>
          <div class="demo">
            <lu-card>
              <h2 slot="header" class="title">Deathbringer Stance</h2>
              Aatrox deals bonus damage on his next attack and reduces heals and shields on the target.
            </lu-card>
          </div>
          <div class="subtitle">Custom Body</div>
          <div class="demo">
            <lu-card>
              <h2 slot="header" class="title">Card with Radio</h2>
              <p>Who's the most fun champion to play?</p>
              <lu-radio
                :options="options"
                v-model="selected"
              />
            </lu-card>
          </div>
          <div class="subtitle">With Button</div>
          <div class="demo">
            <lu-card>
              <h2 slot="header" class="title">Deathbringer Stance ?</h2>
              <p>Aatrox deals bonus damage on his next attack and reduces heals and shields on the target.</p>
              <lu-btn-group slot="button">
                <lu-btn @click="btnClick">Yes</lu-btn>
                <lu-btn @click="btnClick">No</lu-btn>
              </lu-btn-group>
            </lu-card>
          </div>
        </section>
        <section>
          <div class="title">Slider</div>
          <div class="subtitle">Default <strong>Step = 10</strong></div>
          <lu-slider v-model="slider" />
          <div class="subtitle">Custom <strong>Step = 1</strong></div>
          <lu-slider
            :step="1"
            v-model="slider" />
          <div class="subtitle">With Tooltip</div>
          <lu-slider
            :tooltip="true"
            v-model="slider" />
          <div class="subtitle">Disabled</div>
          <lu-slider
            :disabled="true"
            v-model="slider" />
        </section>
        <section>
          <div class="title navbar-title">Navbar</div>
          <lu-navbar >
            <lu-nav-item
              :active="true"
              href="/"
            >Active</lu-nav-item>
            <lu-nav-item href="/shop">Normal</lu-nav-item>
          </lu-navbar>
        </section>
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
      options: ['Aatrox', 'Pyke', 'Swain', 'Jinx'],
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

  .navbar-title
    margin-bottom 50px
</style>
