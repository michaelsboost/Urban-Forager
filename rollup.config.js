import terser from '@rollup/plugin-terser';

export default {
  input: 'src/script.js',
  output: {
    file: 'dist/script.js',
    format: 'iife',
    name: 'urbanForagerBundle'
  },
  plugins: [terser({ maxWorkers: 1 })]
};
