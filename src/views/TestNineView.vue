<template>
  <TestLayout>
    <template v-slot:progress-bar>
      <ProgressBar :progress="90" />
    </template>
    <template v-slot:content>
      <div class="test-center">
        <Title text="Вам привычнее и важнее:" />
        <div class="btns-wrap">
          <BaseRadioButton
            v-for="option in options"
            :key="option.id"
            :id="option.id"
            :name="'tense'"
            :value="option.value"
            :label="option.label"
            v-model="selectedOption"
          />
        </div>
      </div>
    </template>

    <template v-slot:btn>
      <Button :disabled="!selectedOption" to="test-10" />
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
        {
          id: 'present',
          value: 'настоящий',
          label: 'Наслаждаться каждой минутой проведенного времени'
        },
        { id: 'feature', value: 'будущее', label: 'Быть устремленными мыслями в будущее' },
        { id: 'past', value: 'ушедшее', label: 'Учитывать в ежедневной практике прошлый опыт' }
      ]
    }
  }
}
</script>
