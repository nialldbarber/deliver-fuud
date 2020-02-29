<template>
  <button>
    <slot>+</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  outline: 0;
  background-color: #eaeaea;
}
</style>
