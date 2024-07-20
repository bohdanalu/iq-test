<template>
  <h2 class="title">{{ text }}</h2>
</template>

<script>
export default {
  props: {
    text: String,
    default: ''
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 0.05em;
}
</style>
