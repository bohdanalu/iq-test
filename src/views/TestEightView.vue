<template>
  <TestLayout>
    <template v-slot:progress-bar>
      <ProgressBar :progress="80" />
    </template>
    <template v-slot:content>
      <div class="test-center">
        <Title text="Выберите правильную фигуру из четырёх пронумерованных." />
        <div class="test-num">
          <img src="@/assets/test_person.png" alt="Тестовая картинка" />
          <div class="num-wrap">
            <NumberRadioButton
              v-for="(number, index) in numberOptions"
              :key="index"
              :id="'radio-' + index"
              name="number"
              :value="number"
              v-model="selectedOption"
            />
          </div>
        </div>
      </div>
    </template>

    <template v-slot:btn>
      <Button :disabled="!selectedOption" to="test-9" />
    </template>
  </TestLayout>
</template>

<script>
import TestLayout from '@/components/TestLayout.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import Title from '@/components/Title.vue'
import NumberRadioButton from '@/components/NumberRadioButton.vue'
import Button from '@/components/Button.vue'

export default {
  components: {
    TestLayout,
    ProgressBar,
    Title,
    NumberRadioButton,
    Button
  },
  data() {
    return {
      selectedOption: null,
      numberOptions: [1, 2, 3, 4]
    }
  }
}
</script>

<style scoped>
.test-num {
  text-align: center;
  margin-top: 40px;
}

.num-wrap {
  margin-top: 23px;
  display: flex;
  justify-content: center;
  gap: 30px;
}
</style>
