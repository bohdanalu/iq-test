<template>
  <TestLayout>
    <template v-slot:progress-bar>
      <ProgressBar :progress="90" />
    </template>
    <template v-slot:content>
      <div class="test-center">
        <Title
          text="Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:"
        />
        <div class="test-figure">
          <img src="@/assets/test_piramida.png" alt="Тестовая картинка" width="173" height="115" />
          <div>
            <BaseRadioButton
              v-for="option in options"
              :key="option.id"
              :id="option.id"
              :name="'figure'"
              :value="option.value"
              :label="option.label"
              v-model="selectedOption"
            />
          </div>
        </div>
      </div>
    </template>

    <template v-slot:btn>
      <Button :disabled="!selectedOption" to="test-11" />
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
          id: 'sharp',
          value: 'остроконечное',
          label: 'Oно остроконечное'
        },
        { id: 'flat', value: 'устойчиво', label: 'Oно устойчиво' },
        { id: 'equilibrium', value: 'равновесие', label: 'Oно-находится в состоянии равновесия' }
      ]
    }
  }
}
</script>

<style scoped>
.test-figure {
  text-align: center;
}

img {
  margin: 20px 0;
}
</style>
