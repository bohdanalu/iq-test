<template>
  <section class="bottom">
    <div class="container">
      <div class="bottom-first-text">
        <p>
          Прохождение теста займет у вас не более <span>12 минут</span> , а его
          <strong>результаты</strong> вы сможете <span>использовать всю жизнь.</span>
        </p>
      </div>
      <div class="bottom-second-text">
        <p>
          Профессиональная интерпретация и детально
          <strong>проработанные рекомендации</strong> позволят вам качественно
          <strong>изменить все аспекты своей жизни</strong>: от финансового до любовного.
        </p>
      </div>

      <Button label="Пройти тест" className="btn-secondary" to="/test-1" />
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
.bottom {
  background-image: url('@/assets/lightning_right.png'), url('@/assets/lightning_left.png'),
    url('@/assets/rain_bk.png');
  background-position:
    right 40%,
    left 90%,
    center;
  background-size: auto, auto, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  padding: 55px 0;
}

.bottom-first-text {
  max-width: 282px;
  margin-bottom: 20px;
  color: var(--white);
  font-size: 15px;
  line-height: 133%;
}

.bottom-second-text {
  background: rgba(243, 243, 242, 0.8);
  border-radius: 20px;
  padding: 25px 15px;
  font-size: 16px;
  line-height: 144%;
  letter-spacing: 0.05em;
  margin-bottom: 30px;
}

p {
  letter-spacing: 0.05em;
}

span {
  font-weight: 900;
  color: var(--accent);
}
</style>
