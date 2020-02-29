<template>
  <div>
    <div class="restaurant-list">
      <router-link v-for="res in state.data" :key="res.id" :to="`/store/${res.id}`">
        <Card :store="res" />
      </router-link>
    </div>
  </div>
</template>

<script>
// homepage
// displays all restaurants
// card layout
// name, image, location, type

// restaurant
// displays food
// list layout
// name, image, location, type, food list

// logic - add item to cart

// cart
// displays list of items and their count

import { onMounted } from '@vue/composition-api'
import { RESTAURANTS } from '~/constants/api'
import { useFetchApi } from '~/hooks/useFetch'
import Card from '~/components/card.vue'

export default {
  name: 'Home',
  components: {
    Card,
  },
  setup() {
    const { state, fetchData } = useFetchApi(RESTAURANTS)

    onMounted(() => {
      fetchData()
    })

    return {
      state,
      fetchData,
    }
  },
}
</script>

<style lang="scss" scoped>
.restaurant-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}
</style>
