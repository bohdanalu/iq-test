<template>
  <section class="hero dynamic-padding">
    <div class="container">
      <div class="hero-content">
        <div class="hero-top">
          <h2 class="hero-subtitle">Пройдите точный и быстрый</h2>
          <h1 class="hero-title">Тест на определение IQ</h1>
        </div>

        <div class="hero-bottom">
          <Button label="Пройти тест" to="/test-1" />
          <div class="hero-text">
            <p>
              <span class="hero-subtext"
                >и получите рекомендации по развитию своего интеллекта</span
              >
              <br />
              и улучшению финансового благосостояния и личной жизни
            </p>
          </div>
          <button class="button-arrow">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.45453 7.63636L4.45453 2.10454L6.99544 4.64545L7.63635 4L3.99999 0.363632L0.363625 4L1.00453 4.6409L3.54544 2.10454L3.54544 7.63636L4.45453 7.63636Z"
                fill="#0C0B10"
              />
            </svg>
          </button>
          <span class="hero-text-arrow">Подробнее</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'HeroSection',
  components: {
    Button
  }
}
</script>

<style scoped>
.hero {
  width: 100vw;
  height: calc(100vh - 46px);
  background-image: url(@/assets/brain_bg.png);
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
}

.dynamic-padding {
  padding: var(--section-padding);
}

.container {
  height: 100%;
}

.hero-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.hero-subtitle {
  font-size: 18px;
  letter-spacing: 0.05em;
  color: var(--white);
  margin-bottom: 30px;
}

.hero-title {
  max-width: 252px;
  margin: 0 auto;
  font-family: var(--second-family);
  font-size: 30px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--accent);
}

.hero-text {
  font-weight: 700;
  font-size: 15px;
  line-height: 127%;
  letter-spacing: 0.05em;
  color: var(--white);
  margin: 20px 0;
}

.hero-subtext {
  color: var(--accent);
}

.hero-bottom {
  display: flex;
  flex-direction: column;
  max-width: 286px;
  margin: 0 auto;
}

.button-arrow {
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto 10px;
}

.hero-text-arrow {
  font-size: 8px;
  letter-spacing: 0.05em;
  color: var(--white);
}

@media (max-height: 680px) {
  .dynamic-padding {
    --section-padding: 20px 0 10px;
  }
}

@media (min-height: 681px) and (max-height: 800px) {
  .dynamic-padding {
    --section-padding: 20px 0 30px;
  }
}

@media (min-height: 801px) {
  .dynamic-padding {
    --section-padding: 20px 0 50px;
  }

  .button-arrow {
    width: 25px;
    height: 25px;
  }

  .hero-text {
    margin: 35px 0;
  }
}
</style>
