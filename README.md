<p align="center">
    <img src=".github/assets/cover.svg" >
</p>

<h1>Nuxt LazySizes</h1>

LazySizes module for Nuxt.js

## Features

- Helps you integrate `lazysizes` image loader
- Allows you to easily set options through the module
- Includes settings that can be used to extend the Nuxt build `loader`
- Boosts your lighthouse score and overall performance 🔥
- Provides a `lightweight`, `fast` and `reliable` solution
- `Zero-config` setup ready to go 🚀

## Quick Start

1. Add `nuxt-lazysizes` dependency to your project

```bash
$ npm install --save-dev nuxt-lazysizes # or yarn add --dev nuxt-lazysizes
```

2. Add `nuxt-lazysizes` to the `buildModules` section of `nuxt.config.js`

```js
// nuxt.config.js

export default {
  buildModules: ['nuxt-lazysizes'],

  lazySizes: {
    /* module options */
  }
}
```

That's it! Start developing your app ✨

## Examples

💻 Here are some code examples

- [Basic](https://github.com/ivodolenc/nuxt-lazysizes/tree/master/examples/basic)
- [Advanced](https://github.com/ivodolenc/nuxt-lazysizes/tree/master/examples/advanced)

### Basic usage

`lazysizes` does not need any configuration. Add the class `lazyload` to your images/iframes in combination with a `data-src` and/or `data-srcset` attribute.

```js
// nuxt.config.js

{
  buildModules: ['nuxt-lazysizes'],
}
```

```html
<img data-src="/media/image.jpg" class="lazyload" />
```

[More info](https://github.com/aFarkas/lazysizes#more-about-the-api)

### Advanced usage (optional)

By default, loading images from the `assets` folder won't work without extra settings because lazysizes uses custom attributes for lazyloading.

```html
<!-- This won't work -->

<img :data-src="require('~/assets/media/image.jpg')" class="lazyload" />
```

✅ To fix this problem, the module provides `extendAssetUrls` option that can be used to extend the Nuxt build loader and define custom tags with new attributes:

```js
// nuxt.config.js

{
  buildModules: ['nuxt-lazysizes'],

  lazySizes: {
    extendAssetUrls: {
      img: 'data-src',
      source: 'data-srcset',
      // Component with custom props
      AppImage: ['source-md-url', 'image-url'],
    },
  }
}
```

After defining the `extendAssetUrls` option, loading images from the `assets` folder will work as expected 👌

**Non-responsive example**

```html
<img data-src="~/assets/media/image.jpg" class="lazyload" />
```

**Responsive example**

```html
<figure>
  <picture>
    <source
      data-srcset="~/assets/media/image-md.jpg"
      media="(min-width:700px)"
    />
    <img data-src="~/assets/media/image.jpg" class="lazyload" />
  </picture>
</figure>
```

**Custom component example**

```html
<AppImage
  source-md-url="~/assets/media/image-md.jpg"
  image-url="~/assets/media/image.jpg"
/>
```

## Options

✅ `lazysizes` automatically detects new elements with the class `lazyload` so you won't need to call or configure anything in most situations.

**Default options**

```js
// nuxt.config.js

{
  lazySizes: {
    extendAssetUrls: undefined,

    // LazySizes JS API
    lazyClass: 'lazyload',
    loadedClass: 'lazyloaded',
    loadingClass: 'lazyloading',
    preloadClass: 'lazypreload',
    errorClass: 'lazyerror',
    autosizesClass: 'lazyautosizes',
    fastLoadedClass: 'ls-is-cached',
    iframeLoadMode: 0,
    srcAttr: 'data-src',
    srcsetAttr: 'data-srcset',
    sizesAttr: 'data-sizes',
    minSize: 40,
    customMedia: {},
    init: true,
    expFactor: 1.5,
    hFac: 0.8,
    loadMode: 2,
    loadHidden: true,
    ricTimeout: 0,
    throttleDelay: 125
  }
}
```

[More info](https://github.com/aFarkas/lazysizes#js-api)

## License

**LazySizes**

[MIT License](https://github.com/aFarkas/lazysizes/blob/gh-pages/LICENSE)

Copyright (c) Alexander Farkas

**Nuxt LazySizes Module**

[MIT License](LICENSE)

Copyright (c) Ivo Dolenc
