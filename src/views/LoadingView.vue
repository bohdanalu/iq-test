<template>
  <TestLayout>
    <template v-slot:progress-bar>
      <ProgressBar :progress="99" />
    </template>
    <template v-slot:content>
      <div>
        <Title text="Oбработка результатов" />
        <div class="loading">
          <Loading />
        </div>
        <p>
          Определение стиля мышления........... ....
          ...................................................
        </p>
      </div>
    </template>
    <template v-slot:btn> <div></div></template>
  </TestLayout>
</template>

<script>
import Loading from '@/components/Loading.vue'
import TestLayout from '@/components/TestLayout.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import Title from '@/components/Title.vue'

export default {
  components: {
    TestLayout,
    ProgressBar,
    Title,
    Loading
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('/test-result')
    }, 3000)
  }
}
</script>

<style scoped>
.loading {
  margin: 30px 0;
  display: flex;
  justify-content: center;
}
</style>
