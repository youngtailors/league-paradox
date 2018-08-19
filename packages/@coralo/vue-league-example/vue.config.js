module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/league-paradox' : '',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'src/index.html'
    }
  }
}
