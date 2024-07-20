<template>
  <TestLayout>
    <template v-slot:progress-bar>
      <ProgressBar :progress="40" />
    </template>
    <template v-slot:content>
      <div class="test-center">
        <Title
          text="Продолжите числовой ряд: 
          18  20  24  32 "
        />
        <div class="btns-wrap">
          <BaseRadioButton
            v-for="(value, index) in numberOptions"
            :key="index"
            :id="'radio-' + value"
            name="num"
            :value="value"
            :label="value"
            v-model="selectedOption"
          />
        </div>
      </div>
    </template>

    <template v-slot:btn>
      <Button :disabled="!selectedOption" to="test-5" />
    </template>
  </TestLayout>
</template>

<script>
import TestLayout from '@/components/TestLayout.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import Title from '@/components/Title.vue'
import BaseRadioButton from '@/components/BaseRadioButton.vue'
import Button from '@/components/Button.vue'

export default {
  components: {
    TestLayout,
    ProgressBar,
    Title,
    BaseRadioButton,
    Button
  },
  data() {
    return {
      selectedOption: null,
      numberOptions: ['62', '48', '74', '57', '60', '77']
    }
  }
}
</script>
