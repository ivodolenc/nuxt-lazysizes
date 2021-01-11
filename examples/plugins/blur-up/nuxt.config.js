export default {
  css: ['~/assets/css/main.css'],

  buildModules: ['nuxt-lazysizes'],

  lazySizes: {
    plugins: {
      blurUp: true
    },

    /**
     * OPTIONAL !!!
     * Define custom settings here
     */
    blurUpClass: 'ls-blur-up-img',
    blurUpLoadingClass: 'ls-blur-up-is-loading',
    blurUpInviewClass: 'ls-inview',
    blurUpLoadedClass: 'ls-blur-up-loaded',
    blurUpLoadedOriginalClass: 'ls-original-loaded'
  }
}
