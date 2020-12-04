<template>
  <figure>
    <picture>
      <source
        v-if="sourceMdUrl"
        :data-srcset="sourceMdUrl"
        media="(min-width:700px)"
      />
      <img :data-src="imageUrl" class="lazy" />
    </picture>
  </figure>
</template>

<script>
export default {
  props: {
    sourceMdUrl: {
      type: String,
      default: null
    },

    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>
