# Nuxt Lazysizes

Lazysizes module for Nuxt 2.

## Features

- Helps you integrate `lazysizes` loader
- Allows you to easily set options through the module
- Includes settings that can be used to extend the Nuxt build `loader`
- Boosts your lighthouse score and overall performance 🔥
- Provides a `lightweight`, `fast` and `reliable` solution
- Supports options to enable additional `plugins`
- `Zero-config` setup ready to go 🚀

## Quick Start

1. Install `nuxt-lazysizes` dependency to your project

```bash
$ yarn add -D nuxt-lazysizes # or npm i -D nuxt-lazysizes
```

2. Enable `nuxt-lazysizes` in the `buildModules` section

```js
// nuxt.config.js

export default {
  buildModules: ['nuxt-lazysizes'],

  lazySizes: {
    /* Module Options */
  }
}
```

That's it! Start developing your app!

## Examples

Here are some code examples

- [Basic](https://github.com/ivodolenc/nuxt-lazysizes/tree/master/examples/basic)
- [Advanced](https://github.com/ivodolenc/nuxt-lazysizes/tree/master/examples/advanced)
- [Plugins](https://github.com/ivodolenc/nuxt-lazysizes/tree/master/examples/plugins)

### Basic usage

Lazysizes does not need any configuration. Add the class `lazyload` to your images/iframes in combination with a `data-src` and/or `data-srcset` attribute.

```js
// nuxt.config.js

export default {
  buildModules: ['nuxt-lazysizes']
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

export default {
  buildModules: ['nuxt-lazysizes'],

  lazySizes: {
    extendAssetUrls: {
      img: ['src', 'srcset', 'data-src', 'data-srcset'],
      source: ['src', 'srcset', 'data-src', 'data-srcset'],

      // Example for a custom component
      AppImage: ['source-md-url', 'image-url']
    }
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

### Extra plugins (optional)

The module also supports options to enable additional `plugins`, so you can easily extend and adjust lazysizes to your needs.

```js
// nuxt.config.js

export default {
  lazySizes: {
    plugins: {
      blurUp: true,
      nativeLoading: true,
      bgset: true
    }
  }
}
```

[More info](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins)

## Module Options

Lazysizes automatically detects new elements with the class `lazyload` so you won't need to call or configure anything in most situations.

**Defaults**

```js
// nuxt.config.js

export default {
  lazySizes: {
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

### Blur-Up plugin

- Default: `false`

```js
// nuxt.config.js

export default {
  lazySizes: {
    plugins: {
      blurUp: true
    },

    // Default 'blurUp' settings
    blurUpClass: 'ls-blur-up-img',
    blurUpLoadingClass: 'ls-blur-up-is-loading',
    blurUpInviewClass: 'ls-inview',
    blurUpLoadedClass: 'ls-blur-up-loaded',
    blurUpLoadedOriginalClass: 'ls-original-loaded'
  }
}
```

[More info](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/blur-up)

### Native loading plugin

- Default: `false`

```js
// nuxt.config.js

export default {
  lazySizes: {
    plugins: {
      nativeLoading: true
    },

    // Default 'nativeLoading' settings
    nativeLoading: {
      setLoadingAttribute: false,
      listenerMap: {
        focus: 1,
        mouseover: 1,
        click: 1,
        load: 1,
        transitionend: 1,
        animationend: 1,
        scroll: 1,
        resize: 1
      },
      disableListeners: undefined
    }
  }
}
```

[More info](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/native-loading)

### Unveilhooks plugin (data-bg)

- Default: `false`

```js
// nuxt.config.js

export default {
  lazySizes: {
    plugins: {
      unveilhooks: true
    }
  }
}
```

[More info](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/unveilhooks)

### Parent-fit plugin

- Default: `false`

```js
// nuxt.config.js

export default {
  lazySizes: {
    plugins: {
      parentFit: true
    }
  }
}
```

[More info](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/parent-fit)

### Rias plugin

- Default: `false`

```js
// nuxt.config.js

export default {
  lazySizes: {
    plugins: {
      rias: true
    },

    // Rias defaults
    rias: {
      prefix: '',
      postfix: '',
      srcAttr: 'data-src',
      absUrl: false,
      modifyOptions: noop,
      widthmap: {},
      ratio: false,
      traditionalRatio: false,
      aspectratio: false,
      widths: []
    }
  }
}
```

[More info](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/rias)

### Optimumx plugin

- Default: `false`

```js
// nuxt.config.js

export default {
  lazySizes: {
    plugins: {
      optimumx: true
    }
  }
}
```

[More info](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/optimumx)

### CustomMedia plugin

- Default: `false`

```js
// nuxt.config.js

export default {
  lazySizes: {
    plugins: {
      customMedia: true
    },

    customMedia: {}
  }
}
```

[More info](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/custommedia)

### Bgset plugin

- Default: `false`

```js
// nuxt.config.js

export default {
  lazySizes: {
    plugins: {
      bgset: true
    }
  }
}
```

[More info](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/bgset)

## License

**LazySizes**

[MIT License](https://github.com/aFarkas/lazysizes/blob/gh-pages/LICENSE)

Copyright (c) Alexander Farkas

**Nuxt LazySizes**

[MIT License](LICENSE)

Copyright (c) Ivo Dolenc
