<script>
export default {
  name: 'lu-arrow',
  render (h) {
    return h('svg', {
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        x: '0px',
        y: '0px',
        viewBox: '0 0 100 100',
        enableBackground: 'new 0 0 100 100'
      }
    }, [
      h('polygon', {
        attrs: {
          points: '23.5,30.1 29.8,36.4 50,16.3 70.2,36.4 76.5,30.1 50,3.6'
        }
      }),
      h('polygon', {
        attrs: {
          points: '76.5,69.7 70.2,63.4 49.6,83.9 29.8,64.1 23.5,70.5 49.6,96.6'
        }
      })
    ])
  }
}
</script>
