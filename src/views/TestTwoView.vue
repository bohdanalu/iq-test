<template>
  <TestLayout>
    <template v-slot:progress-bar>
      <ProgressBar :progress="20" />
    </template>
    <template v-slot:content>
      <div class="test-center">
        <Title text="Укажите ваш возраст:" />
        <div class="btns-wrap">
          <BaseRadioButton
            v-for="option in ageOptions"
            :key="option.id"
            :id="option.id"
            :name="'age'"
            :value="option.value"
            :label="option.label"
            v-model="selectedOption"
          />
        </div>
      </div>
    </template>

    <template v-slot:btn>
      <Button :disabled="!selectedOption" to="test-3" />
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
      ageOptions: [
        { id: 'teenager', value: 'до 18', label: 'До 18' },
        { id: 'young', value: 'от 18 до 28', label: 'от 18 до 28' },
        { id: 'middle', value: 'от 29 до 35', label: 'Oт 29 до 35' },
        { id: 'adult', value: 'от 35', label: 'Oт 35' }
      ]
    }
  }
}
</script>
