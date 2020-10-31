import { resolve } from 'path'
import pkg from '../package.json'

export default function (moduleOptions) {
  this.nuxt.hook('build:before', () => {
    const options = {
      ...this.options.lazySizes,
      ...moduleOptions
    }

    if (!options) {
      return
    }

    this.addPlugin({
      src: resolve(__dirname, 'plugin.js'),
      ssr: false,
      fileName: 'lazySizes.js',
      options
    })
  })
}

export { pkg as meta }
