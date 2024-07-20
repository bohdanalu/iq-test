<template>
  <div class="progress-bar">
    <div class="progress-bar-fill" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 11px;
  background-color: var(--gray);
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background-color: var(--progress);
  transition: width 0.3s ease;
}
</style>
