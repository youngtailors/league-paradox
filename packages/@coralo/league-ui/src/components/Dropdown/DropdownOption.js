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
      data: { staticClass },
      children
    }
  ) {
    return h(
      'div',
      {
        class: staticClass,
        attrs: {
          role: 'option',
          'aria-selected': selected
        }
      },
      children
    )
  }
}
