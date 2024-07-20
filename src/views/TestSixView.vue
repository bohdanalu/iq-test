<template>
  <ColorTest
    title="Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен: "
    nextRoute="/test-7"
    :progressPercentage="60"
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
