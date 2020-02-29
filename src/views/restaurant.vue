<template>
  <div class="restaurant">
    <div v-for="store in data" :key="store.id">
      <h1>{{ store.store }}</h1>
      <div class="menu-item" v-for="menu in store.menu" :key="menu.food">
        <p>{{ menu.food }}</p>
        <Button @click="getCurrentId(menu.id)">+</Button>
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { RESTAURANTS } from '~/constants/api'
import Button from '~/components/button.vue'

export default {
  name: 'Restaurant',
  components: {
    Button,
  },
  props: {
    id: Number | String,
  },
  data: () => ({
    data: null,
    loading: true,
    error: false,
  }),
  methods: {
    ...mapActions(['addItemToCart']),
    async fetchData() {
      try {
        const response = await fetch(RESTAURANTS)
          .then((res) => res.json())
          .then((data) => {
            const output = data.filter((store) => store.id === this.storeId)
            this.data = output
            this.loading = false
            console.log(output)
          })
      } catch (err) {
        console.log(err)
        this.error = true
      } finally {
        this.loading = false
      }
    },
    getCurrentId(id) {
      const item = {
        storeId: this.storeId,
        foodId: id,
      }
      this.addItemToCart(item)
    },
  },
  mounted() {
    this.fetchData()
  },
  computed: {
    storeId: function() {
      return parseFloat(this.$route.params.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.restaurant {
  padding: 0 1rem;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  border: 1px dashed red;
  max-width: 300px;
  margin: 1rem 0;
  padding: 1rem;
}
</style>
