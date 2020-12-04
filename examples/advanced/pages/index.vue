<template>
  <div>
    <!-- Non-responsive example -->
    <figure>
      <img data-src="~/assets/media/image.jpg" class="lazy" />
    </figure>

    <!-- Responsive example -->
    <figure>
      <picture>
        <source
          data-srcset="~/assets/media/image-md.jpg"
          media="(min-width:700px)"
        />
        <img data-src="~/assets/media/image.jpg" class="lazy" />
      </picture>
    </figure>

    <!-- Custom component example -->
    <AppImage
      source-md-url="~/assets/media/image-md.jpg"
      image-url="~/assets/media/image.jpg"
    />
  </div>
</template>

<script>
export default {}
</script>
