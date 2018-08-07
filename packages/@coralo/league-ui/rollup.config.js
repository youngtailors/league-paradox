import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import nodent from 'rollup-plugin-nodent'
import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'

const reslv = p => {
  return path.resolve(__dirname, p)
}

const plugins = [resolve(), vue()]

export default [
  {
    input: reslv('src/main.js'),
    output: {
      format: 'es',
      file: reslv('dist/leagueui.es.js')
    },
    plugins
  },
  {
    input: reslv('src/main.js'),
    output: {
      format: 'cjs',
      file: reslv('dist/leagueui.common.js'),
      exports: 'named'
    },
    plugins
  },
  {
    input: reslv('src/main.js'),
    output: {
      format: 'iife',
      file: reslv('dist/leagueui.iife.js'),
      name: 'leagueui',
      exports: 'named'
    },
    plugins: [
      ...plugins,
      nodent(),
      buble(),
      uglify({
        compress: { unused: true, dead_code: true }
      })
    ]
  }
]
