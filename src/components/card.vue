<template>
  <div class="card">
    <p class="store">
      <Skeleton v-if="loading" width="100px" height="80px" />
      <slot v-else name="store" />
    </p>
    <p class="location">
      <slot name="location" />
    </p>
    <p class="type">
      <slot name="type" />
    </p>
    <div class="logo">
      <slot name="logo" />
    </div>
  </div>
</template>

<script>
import Skeleton from '~/components/skeleton.vue'

export default {
  name: 'Card',
  components: {
    Skeleton,
  },
  props: {
    store: Object,
    loading: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: grid;
  grid-template-areas:
    'logo store'
    'logo location'
    'logo type';
  align-items: center;
  background: white;
  margin: 1rem 0;
  padding: 1rem;
  height: 150px;
  border-radius: 4px;
  text-decoration: none;

  .logo {
    grid-area: logo;
  }

  .store {
    grid-area: store;
  }

  .location {
    grid-area: location;
  }

  .type {
    grid-area: type;
  }

  p {
    color: #555;
    margin: 0;
  }

  img {
    max-width: 100px;
  }
}
</style>
