import path from 'path'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import nodent from 'rollup-plugin-nodent'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import url from 'postcss-url'
import { uglify } from 'rollup-plugin-uglify'

const reslv = p => {
  return path.resolve(__dirname, p)
}

const style = {
  trim: false,
  postcssPlugins: [url({ url: 'inline' })]
}

const plugins = [
  commonjs(),
  resolve({
    extensions: ['.js', '.vue']
  }),
  vue({
    style
  })
]

export default [
  {
    input: reslv('src/main.js'),
    output: [
      {
        format: 'es',
        file: reslv('dist/league-ui.es.js')
      },
      {
        format: 'cjs',
        file: reslv('dist/league-ui.common.js'),
        exports: 'named'
      }
    ],
    plugins,
    external: ['element-resize-detector']
  },
  {
    input: reslv('src/main.js'),
    output: {
      format: 'iife',
      file: reslv('dist/league-ui.iife.js'),
      name: 'leagueui',
      exports: 'named'
    },
    plugins: [
      ...plugins,
      nodent({
        promises: true,
        noRuntime: true
      }),
      buble(),
      uglify({
        compress: { unused: true, dead_code: true }
      })
    ]
  }
]
