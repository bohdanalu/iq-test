<template>
  <TestLayout>
    <template v-slot:progress-bar>
      <ProgressBar :progress="10" />
    </template>
    <template v-slot:content>
      <div class="test-center">
        <Title text="Ваш пол:" />
        <div class="btns-wrap">
          <BaseRadioButton
            v-for="option in options"
            :key="option.id"
            :id="option.id"
            :name="'sex'"
            :value="option.value"
            :label="option.label"
            v-model="selectedOption"
          />
        </div>
      </div>
    </template>

    <template v-slot:btn>
      <Button :disabled="!selectedOption" to="test-2" />
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
      options: [
        { id: 'male', value: 'мужчина', label: 'Мужчина' },
        { id: 'female', value: 'женщина', label: 'Женщина' }
      ]
    }
  }
}
</script>
