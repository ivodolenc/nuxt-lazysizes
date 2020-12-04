export default {
  css: ['~/assets/css/main.css'],

  buildModules: ['nuxt-lazysizes'],

  lazySizes: {
    extendAssetUrls: {
      img: 'data-src',
      source: 'data-srcset',
      // Component with custom props
      AppImage: ['source-md-url', 'image-url']
    },
    lazyClass: 'lazy'
  }
}
