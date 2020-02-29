<template>
  <div id="app">
    <Nav />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from '~/components/nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Ubuntu', sans-serif;
  background-color: #f5f5f5;
}

a {
  text-decoration: none;
  color: #266abd;
}

li {
  list-style: none;
}

img {
  width: 100%;
  height: auto;
}

main {
  padding: 1rem;
}
</style>
