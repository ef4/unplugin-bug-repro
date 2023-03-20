import { rollupPlugin } from './example-plugin.mjs';

export default {
  input: 'example.js',
  output: { dir: 'dist' },
  plugins: [
    rollupPlugin()
  ]
}