<script>
export default {
  functional: true,
  props: {
    checked: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  render (h, { props: { disabled, checked }, data, children, listeners: { change } }) {
    return h(
      'div', {
        class: [
          'radio-option', {
            checked, disabled
          }
        ],
        on: {
          click: change
        }
      },
      [
        h('input', {
          attrs: {
            type: 'radio'
          }
        }),
        h('label', {
          class: 'label'
        },
        [
          h('svg', {
            class: 'control',
            attrs: {
              viewBox: '0 0 6 6',
              xmlns: 'http://www.w3.org/2000/svg'
            }
          }, [
            h('defs', [
              h('linearGradient', {
                attrs: {
                  id: 'hextech-option-active',
                  x1: '100%',
                  y1: '100%',
                  x2: '0%'
                }
              }, [
                h('stop', {
                  attrs: {
                    stopColor: '#684e23'
                  }
                }),
                h('stop', {
                  attrs: {
                    offset: '.8',
                    stopColor: '#493915'
                  }
                })
              ])
            ]),
            h('rect', {
              attrs: {
                x: 1,
                y: 1,
                width: 4,
                height: 4
              }
            })
          ]),
          h('span', {
            class: 'label-text'
          }, children)
        ])
      ]
    )
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styl/variables.styl'

radio-border = linear-gradient(to bottom, rgb(62.7%, 48.2%, 18%) 0%, rgb(43.5%, 32.5%, 14.5%) 80%)
radio-border-hover = linear-gradient(-45deg, rgb(78.8%, 61.6%, 24.7%) 0%, rgb(92.9%, 87.8%, 78%) 80%)
radio-border-active = linear-gradient(-45deg, rgb(40.8%, 30.6%, 13.7%) 0%, rgb(28.6%, 22.4%, 8.2%) 80%)
radio-border-disabled = rgb(23.5%, 21.6%, 19.6%)

.radio-option
  font-family font-family
  color lcu-gold-medium
  cursor pointer
  margin 0.5rem 0
  outline none

  input[type='radio']
    opacity 0
    position absolute

    &:focus + .label, & + .label:hover, .label:focus
      .control
        border-image radio-border-hover
        border-image-slice 1

    & + .label:active
      .control
        border-image radio-border-active
        border-image-slice 1

  .label
    display flex
    align-items center
    outline none
    cursor pointer

    .label-text
      font-weight normal
      letter-spacing 0.05rem
      margin-left 0.8rem

    .control
      display inline-block
      transform rotateZ(45deg)
      backface-visibility hidden
      width 0.6rem
      height 0.6rem
      border 0.15rem solid transparent
      border-image radio-border
      border-image-slice 1
      fill transparent

    &:active
      .control
        border-image radio-border-active
        border-image-slice 1

  &.checked
    .label
      color lcu-gold

      .control
        fill lcu-gold-medium

    input[type='radio'] + .label:active
      .control
        fill url('#hextech-option-active')

  &.disabled
    cursor default

    .label
      cursor default

      .control
        border 2px solid radio-border-disabled
        border-image none

    input[type='radio']
      opacity 0
      position absolute

      &:focus + .label, & + .label:hover, .label:focus
        .control
          border-image none
</style>
