<template>
  <section class="result">
    <div class="container">
      <div>
        <p>
          Также по результатам теста <span>вы получите</span> подробные <span>советы</span> по
          определению наиболее перспективной <span>для вашего типа</span> интеллекта
          <span>сферы деятельности</span>, которая принесет вам скорейший финансовый результат.
        </p>
      </div>
      <img src="@/assets/brain_img.png" alt="Рисунок мозг" />
      <Button label="Пройти тест" to="/test-1" />
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  }
}
</script>

<style scoped>
.result {
  padding: 40px 0;
  text-align: center;
}

span {
  font-weight: 700;
  text-transform: uppercase;
}
p {
  letter-spacing: 0.05em;
  margin-bottom: 38px;
}

img {
}
</style>
