<template>
  <div class="card">
    <p class="store">{{ store.store }}</p>
    <p class="location">{{ store.location }}</p>
    <p class="type">{{ store.type }}</p>
    <img class="logo" :src="store.logo" alt="Logo" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    store: Object,
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
