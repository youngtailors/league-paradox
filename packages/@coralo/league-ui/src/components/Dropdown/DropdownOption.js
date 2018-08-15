export default {
  name: 'lu-dropdown-option',
  functional: true,
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    focused: {
      type: Boolean,
      default: false
    }
  },
  render (
    h,
    {
      props: { selected, focused },
      data: { class: dynamicClass },
      listeners: { click },
      children
    }
  ) {
    return h(
      'div',
      {
        class: dynamicClass,
        attrs: {
          role: 'option',
          'aria-selected': selected
        },
        on: {
          click
        }
      },
      children
    )
  }
}
