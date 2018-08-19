<template>
  <div
    ref="root"
    :tabindex="disabled ? -1 : tabIndex"
    :class="[
      'dropdown',
      {
        disabled,

      }
    ]"
    :aria-disabled="disabled"
    :aria-expanded="isOpen"
    role="combobox"
    v-on="eventHandlers"
  >
    <div
      :class="[
        'control',
        {
          active: isOpen
        }
      ]"
    >
      {{ `${~selected ? options[selected] : placeholder}` }}
      <arrow class="arrow" />
    </div>
    <div
      v-if="!disabled"
      ref="menu"
      :class="[
        'options',
        {
          hidden: !isOpen
        }
      ]"
      :aria-hidden="!isOpen"
      role="listbox"
    >
      <dropdown-option
        v-for="(option, id) in options"
        :class="[
          'option',
          {
            selected: selected === id
          }
        ]"
        :key="id"
        @click="$emit('select', id)"
      >{{ option }}</dropdown-option>
    </div>
  </div>
</template>

<script>
import Arrow from './Arrow'
import DropdownOption from './DropdownOption'

export default {
  name: 'lu-dropdown',
  components: {
    Arrow,
    DropdownOption
  },
  model: {
    prop: 'selected',
    event: 'select'
  },
  props: {
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    placeholder: {
      type: String,
      default: 'Select ...'
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    expanded: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    isOpen () {
      return this.disabled ? false : (!!this.open || !!this.expanded)
    },
    eventHandlers () {
      return {
        click: () => this.handleToggle(!this.open)
      }
    }
  },
  methods: {
    handleToggle (toggled) {
      let nextOpen = toggled
      if (nextOpen !== this.open) {
        this.open = nextOpen
      }

      this.$emit('toggle')
    },
    optionClick () {
      console.log('abc')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styl/variables.styl'

.dropdown
  display block
  position relative
  cursor pointer
  width 100%
  color $lcu-text-dark
  letter-spacing 0.025rem
  outline none

  // line-height: 1;
  &, & div
    box-sizing border-box
    margin 0

  .control
    padding 10px 14px
    background-color rgba(30, 35, 40, 0.5)
    border 1px solid transparent
    border-image linear-gradient(to top, #695625 0%, #A9852D 23%, #B88D35 93%, #C8AA6E 100%) 1
    overflow hidden
    text-overflow ellipsis
    white-space nowrap

    &.active
      background rgba(30, 35, 40, 0.5)
      color #463714
      border 1px solid #463714

    .arrow
      fill #C8AA6E
      position absolute
      top 0
      bottom 0
      right 9px
      margin auto
      cursor pointer
      height 1em

  &:focus .control, .control:hover, .control:focus
    background linear-gradient(to top, rgba(88, 83, 66, 0.5), rgba(30, 35, 40, 0.5))
    border 1px solid transparent
    border-image linear-gradient(to top, #c89b3c, #f0e6d2) 1

  .options
    position absolute
    top 100%
    width 100%
    max-height 250px
    overflow-y auto
    overflow-x hidden
    background #010A13
    border 1px solid transparent
    border-image linear-gradient(to top, #695625, #463714) 1
    z-index 10

    &.hidden
      max-height 0px
      border 0
      overflow hidden

      & > .option
        display none

    .option
      position relative
      color rgb(80.4%, 74.5%, 56.9%)
      cursor pointer
      overflow-x hidden
      padding 10px
      border-top 1px solid rgb(12.2%, 12.9%, 13.7%)
      text-overflow ellipsis
      white-space nowrap

      &.focused, &:focus
        color rgb(94.1%, 90.2%, 82.4%)
        background-color rgb(11.8%, 13.7%, 15.7%)

      &:active
        color rgb(27.5%, 21.6%, 7.8%)
        background-color rgba(30, 35, 40, 0.5)

      &.selected
        padding-right 1.25em
        padding-right calc(1.25em + 10px)

      &.selected::after
        content ''
        position absolute
        right 10px
        top 0
        bottom 0
        background url('./check.svg') center no-repeat
        width 1.25em
        margin auto

  &.disabled
    pointer-events none
    cursor default
    color lcu-text-disabled

    .control
      border-image none
      border-color lcu-text-disabled
      background-color lcu-bg-disabled

      .arrow
        fill lcu-text-disabled
</style>
