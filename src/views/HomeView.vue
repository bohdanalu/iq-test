<template>
  <main>
    <HeroSection />
    <QuoteSection />
    <ResultSection />
    <BottomSection />
  </main>
</template>

<script>
import HeroSection from '@/sections/HeroSection.vue'
import QuoteSection from '@/sections/QuoteSection.vue'
import ResultSection from '@/sections/ResultSection.vue'
import BottomSection from '@/sections/BottomSection.vue'

export default {
  components: {
    HeroSection,
    QuoteSection,
    ResultSection,
    BottomSection
  }
}
</script>

<style scoped></style>
