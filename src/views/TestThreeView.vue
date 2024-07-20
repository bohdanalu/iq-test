<template>
  <TestLayout>
    <template v-slot:progress-bar>
      <ProgressBar :progress="30" />
    </template>
    <template v-slot:content>
      <div class="test-center">
        <Title text="Выберите лишнее:" />
        <div class="btns-wrap">
          <BaseRadioButton
            v-for="option in buildingOptions"
            :key="option.id"
            :id="option.id"
            :name="'building'"
            :value="option.value"
            :label="option.label"
            v-model="selectedOption"
          />
        </div>
      </div>
    </template>

    <template v-slot:btn>
      <Button :disabled="!selectedOption" to="test-4" />
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
        { id: 'house', value: 'Дом', label: 'Дом' },
        { id: 'tent', value: 'шалаш', label: 'Шалаш' },
        { id: 'bungalow', value: 'бунгало', label: 'Бунгало' },
        { id: 'bench', value: 'скамейка', label: 'Скамейка ' },
        { id: 'hut', value: 'xижина', label: 'Хижина' }
      ]
    }
  }
}
</script>
