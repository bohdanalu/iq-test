<template>
  <section class="quote">
    <div class="overlay-gradient"></div>
    <div class="container">
      <div>
        <IconQuote />
        <p>
          Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но
          и выработать список рекомендаций для повышения этого показателя.
        </p>
        <IconQuote class="revert" />
      </div>
    </div>
  </section>
</template>

<script>
import IconQuote from '@/components/icons/IconQuote.vue'
export default {
  components: {
    IconQuote
  }
}
</script>

<style scoped>
.quote {
  position: relative;
  padding: 50px 10px;
  color: var(--white);
  background-image: url('@/assets/space.png');
  background-size: cover;
  background-position: center;
}

.overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/gradient.png');
  z-index: 1;
  pointer-events: none;
}
p {
  position: relative;
  max-width: 238px;
  font-family: var(--second-family);
  font-size: 18px;
  line-height: 128%;
  letter-spacing: 0.05em;
  text-align: center;
  margin: 0 auto;
  z-index: 5;
}

.revert {
  display: block;
  transform: scaleX(-1);
  margin-left: auto;
}
</style>
