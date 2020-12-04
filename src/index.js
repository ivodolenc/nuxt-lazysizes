import { resolve } from 'path'
import pkg from '../package.json'

export default function nuxtLazySizes(moduleOptions) {
  const { nuxt, addPlugin, extendBuild } = this
  const options = {
    extendAssetUrls: undefined,

    ...nuxt.options.lazySizes,
    ...moduleOptions
  }

  if (options.extendAssetUrls) {
    extendBuild((config, { loaders: { vue } }) => {
      const transformAssetUrlsSettings = options.extendAssetUrls

      vue.transformAssetUrls = transformAssetUrlsSettings
    })
  }

  const { extendAssetUrls, ...pluginOptions } = options

  addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'lazySizes.js',
    ssr: false,
    options: {
      ...pluginOptions
    }
  })
}

export { pkg as meta }
