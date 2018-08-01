import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
// import uglify from 'rollup-plugin-uglify'

const isExternal = id =>
  !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/')

const name = 'melon-hoc'

export default {
  input: `${__dirname}/src/index.js`,
  output: [{
    format: 'umd',
    name,
    file: `dist/${name}.umd.js`,
    globals: {
      react: 'React',
    },
  }, {
    format: 'es',
    file: `dist/${name}.es.mjs`
  }, {
    format: 'cjs',
    moduleName: name,
    file: `dist/${name}.js`
  }],

  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },

  external: isExternal,
  plugins: [
    nodeResolve(),
    babel(),
    commonjs(),
    // (process.env.NODE_ENV === 'production' && uglify()),
  ],
}
