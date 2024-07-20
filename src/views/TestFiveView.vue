<template>
  <ColorTest
    title="Выберите цвет, который сейчас наиболее Вам приятен: "
    nextRoute="/test-6"
    :progressPercentage="50"
  />
</template>

<script>
import ColorTest from '@/components/ColorTest.vue'

export default {
  components: {
    ColorTest
  }
}
</script>
