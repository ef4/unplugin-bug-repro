import { webpackPlugin  } from "./example-plugin.mjs";

export default {
  mode: 'development',
  entry: './example.js',
  output: {
    path: new URL('dist', import.meta.url).pathname,
    filename: 'example.js',
  },
  plugins: [webpackPlugin()]
}