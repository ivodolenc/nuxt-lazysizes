import { resolve } from 'path'
import pkg from '../package.json'

export default function nuxtLazySizes(moduleOptions) {
  const { nuxt, addPlugin, extendBuild } = this
  const options = {
    extendAssetUrls: undefined,
    plugins: {
      blurUp: false,
      nativeLoading: false,
      unveilhooks: false,
      parentFit: false,
      rias: false,
      optimumx: false,
      customMedia: false,
      bgset: false
    },

    ...nuxt.options.lazySizes,
    ...moduleOptions
  }

  if (options.extendAssetUrls) {
    extendBuild((config, { loaders: { vue } }) => {
      const transformAssetUrlsSettings = options.extendAssetUrls

      vue.transformAssetUrls = transformAssetUrlsSettings
    })
  }

  const { extendAssetUrls, plugins, ...lsConfig } = options

  addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'lazySizes.js',
    options: {
      config: lsConfig,
      plugins: options.plugins
    }
  })
}

export { pkg as meta }
