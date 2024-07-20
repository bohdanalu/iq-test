<template>
  <div class="test-layout">
    <div class="container">
      <slot name="progress-bar"></slot>
      <slot name="content"></slot>
      <slot name="btn"></slot>
    </div>
  </div>
</template>

<style scoped>
.test-layout {
  background: var(--bg-test);
  height: calc(100vh - 46px);
  color: var(--white);
  padding: 25px 0;
}

.container {
  height: 100%;
  padding: 0 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
