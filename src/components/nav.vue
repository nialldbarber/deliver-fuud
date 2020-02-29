<template>
  <header>
    <Logo />
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/help">Help</router-link>
        </li>
        <li>
          <router-link to="/cart">
            <Cart class="cart" />
            <p>{{ cartLength }}</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '~/components/logo.vue'
import Cart from '~/assets/cart.svg'

export default {
  name: 'Nav',
  components: {
    Logo,
    Cart,
  },
  computed: {
    ...mapGetters(['cart']),
    cartLength: function() {
      return this.cart.length
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
}

ul {
  display: flex;
  align-items: center;

  a {
    padding: 0 1rem;
  }
}

.cart {
  width: 25px;
  height: 30px;
  fill: #f50428;
}
</style>
