import { createUnplugin } from 'unplugin'

export const unplugin = createUnplugin(() => {
  return {
    name: 'unplugin-bug-example',
    resolveId(id) {
      if (id === 'some-runtime-dependency') {
        return { external: true, id: 'https://unpkg.com/lodash-es' };
      }
    },
  }
})

export const rollupPlugin = unplugin.rollup
export const webpackPlugin = unplugin.webpack
