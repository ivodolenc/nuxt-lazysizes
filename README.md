<p align="center">
    <img src=".github/assets/cover.svg" >
</p>

<h1>Nuxt LazySizes</h1>

Lazysizes module for Nuxt.js

## Features

- Helps you integrate `lazysizes` image loader
- Allows you to easily set options through the module
- Boosts your lighthouse score and overall performance
- Provides a `lightweight`, `fast` and `reliable` solution
- Includes `zero-config` setup ready to go
- [and much more](https://github.com/aFarkas/lazysizes#what-makes-lazysizes-so-awesome) 🔥

## Setup

1. Add `nuxt-lazysizes` dependency to your project

```bash
$ npm install --save-dev nuxt-lazysizes
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

## Examples

`lazysizes` does not need any configuration. Add the class `lazyload` to your images/iframes in conjunction with a `data-src` and/or `data-srcset` attribute. Optionally you can also add a `src` attribute with a low quality image:

```js
// nuxt.config.js

{
  buildModules: ['nuxt-lazysizes']
}
```

```html
<!-- non-responsive: -->
<img data-src="image.jpg" class="lazyload" />
```

```html
<!-- responsive example with automatic sizes calculation: -->
<img
  data-sizes="auto"
  data-src="image2.jpg"
  data-srcset="image1.jpg 300w,
    image2.jpg 600w,
    image3.jpg 900w"
  class="lazyload"
/>
```

```html
<!-- iframe example -->
<iframe
  frameborder="0"
  class="lazyload"
  allowfullscreen=""
  data-src="//www.youtube.com/embed/ZfV-aYdU4uE"
>
</iframe>
```

[More info](https://github.com/aFarkas/lazysizes#how-to)

## Options

`lazysizes` comes with a simple `markup` and `JS` API. Normally you will only need to use the markup API.

**Markup API**

Add the class `lazyload` to all `img` and `iframe` elements, which should be loaded lazy. _Instead_ of a `src` or `srcset` attribute use a `data-src` or `data-srcset` attribute:

```html
<img data-src="image.jpg" class="lazyload" />
<!-- retina optimized image: -->
<img
  data-srcset="responsive-image1.jpg 1x, responsive-image2.jpg 2x"
  class="lazyload"
/>
```

`lazysizes` supports setting the `sizes` attribute automatically, corresponding to the current size of your image - just set the value of `data-sizes` to `auto`.

```html
<img
  data-sizes="auto"
  data-srcset="responsive-image1.jpg 300w,
	    responsive-image2.jpg 600w,
	    responsive-image3.jpg 900w"
  class="lazyload"
/>
```

[More info](https://github.com/aFarkas/lazysizes#markup-api)

**JS API**

`lazysizes` automatically detects new elements with the class `lazyload` so you won't need to call or configure anything in most situations.

```js
// nuxt.config.js

{
  /* Default options */
  lazySizes: {
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

**CSS API**

`lazysizes` adds the class `lazyloading` while the images are loading and the class `lazyloaded` as soon as the image is loaded. This can be used to add unveil effects:

```css
/* global css */

/* fade image in after load */
.lazyload,
.lazyloading {
  opacity: 0;
}

.lazyloaded {
  opacity: 1;
  transition: opacity 300ms;
}
```

```css
/* global css */

/* fade image in while loading and show a spinner as background image (good for progressive images) */

.lazyload {
  opacity: 0;
}

.lazyloading {
  opacity: 1;
  transition: opacity 300ms;
  background: #f7f7f7 url(loader.gif) no-repeat center;
}
```

[More info](https://github.com/aFarkas/lazysizes#css-api)

## License

[MIT License](LICENSE)

Copyright (c) Ivo Dolenc
