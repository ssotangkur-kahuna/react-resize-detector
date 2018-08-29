// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist/umd',
    file: 'index.js',
    format: 'umd',
    name: 'react-resize-detector',
    // exports: 'named',
  },
  // All the used libs needs to be here
  external: [
    'react',
    'react-proptypes',
    'prop-types',
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    resolve(),
    commonjs(),
  ],
};
