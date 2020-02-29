<template>
  <div>
    <div class="restaurant-list">
      <router-link v-for="res in state.data" :key="res.id" :to="`/store/${res.id}`">
        <Card :loading="state.loading">
          <p slot="store">{{ res.store }}</p>
          <p slot="location">{{ res.location }}</p>
          <p slot="type">{{ res.type }}</p>
          <img slot="logo" :src="res.logo" />
        </Card>
      </router-link>
    </div>
  </div>
</template>

<script>
import { watch, onMounted } from '@vue/composition-api'
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
      console.log(state.loading)
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
