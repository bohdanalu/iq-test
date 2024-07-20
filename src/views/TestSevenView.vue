<template>
  <TestLayout>
    <template v-slot:progress-bar>
      <ProgressBar :progress="65" />
    </template>
    <template v-slot:content>
      <div class="test-center">
        <Title text="Какой из городов лишний?" />
        <div class="btns-wrap">
          <BaseRadioButton
            v-for="option in buildingOptions"
            :key="option.id"
            :id="option.id"
            :name="'city'"
            :value="option.value"
            :label="option.label"
            v-model="selectedOption"
          />
        </div>
      </div>
    </template>

    <template v-slot:btn>
      <Button :disabled="!selectedOption" to="test-8" />
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
      buildingOptions: [
        { id: 'Washington', value: 'Вашингтон', label: 'Вашингтон' },
        { id: 'London', value: 'Лондон', label: 'Лондон' },
        { id: 'Paris', value: 'Париж', label: 'Париж' },
        { id: 'New York', value: 'Нью-Йорк', label: 'Нью-Йорк' },
        { id: 'Kyiv', value: 'Киев', label: 'Киев' },
        { id: 'Ottava', value: 'Оттава', label: 'Оттава' }
      ]
    }
  }
}
</script>
