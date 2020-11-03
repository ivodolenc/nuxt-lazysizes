import { resolve } from 'path'
import pkg from '../package.json'

export default function (moduleOptions) {
  const options = {
    ...this.options.lazySizes,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    ssr: false,
    fileName: 'lazySizes.js',
    options
  })
}

export { pkg as meta }
