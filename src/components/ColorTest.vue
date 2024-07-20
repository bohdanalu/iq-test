<template>
  <TestLayout>
    <template v-slot:progress-bar>
      <ProgressBar :progress="progressPercentage" />
    </template>
    <template v-slot:content>
      <div class="test-center">
        <Title :text="title" />
        <div class="test-square">
          <ColorRadioButton
            v-for="(color, index) in shuffledColors"
            :key="index"
            :id="'radio-' + index"
            name="color"
            :value="color"
            v-model="selectedOption"
          />
        </div>
      </div>
    </template>

    <template v-slot:btn>
      <Button :disabled="!selectedOption" :to="nextRoute" />
    </template>
  </TestLayout>
</template>

<script>
import TestLayout from '@/components/TestLayout.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import Title from '@/components/Title.vue'
import ColorRadioButton from '@/components/ColorRadioButton.vue'
import Button from '@/components/Button.vue'

export default {
  components: {
    TestLayout,
    ProgressBar,
    Title,
    ColorRadioButton,
    Button
  },
  props: {
    title: {
      type: String,
      required: true
    },
    nextRoute: {
      type: String,
      required: true
    },
    progressPercentage: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      selectedOption: null,
      colorsOptions: [
        '#A8A8A8',
        '#0000A9',
        '#00A701',
        '#F60100',
        '#FDFF19',
        '#A95403',
        '#850068',
        '#46B2AC',
        '#000000'
      ]
    }
  },
  computed: {
    shuffledColors() {
      return this.shuffleArray([...this.colorsOptions])
    }
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    }
  }
}
</script>

<style scoped>
.test-square {
  display: grid;
  width: 283px;
  grid-template-columns: auto auto auto;
  margin: 40px auto 0;
}
</style>
