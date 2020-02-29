<template>
  <div>
    <h1>Cart page</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  computed: mapGetters(['cart']),
  mounted() {
    console.log(this.cart)
  },
}
</script>

<style>
</style>
