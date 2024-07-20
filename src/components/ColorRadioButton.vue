<template>
  <div class="radio-button">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="updateValue"
    />
    <label :for="id">
      <span class="color-box" :style="{ backgroundColor: value }"></span>
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value
    }
  },
  methods: {
    updateValue() {
      this.$emit('update:modelValue', this.value)
    }
  }
}
</script>

<style scoped>
.radio-button {
  position: relative;
  height: 81px;
  width: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.radio-button input[type='radio'] {
  position: absolute;
  opacity: 0;
}

.radio-button label {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  line-height: 322%;
  letter-spacing: 0.05em;
  z-index: 1;
}

.radio-button .color-box {
  width: 81px;
  height: 81px;
  border-width: 6px;
  border-color: var(--bg-test);
  border-style: solid;
  transition: border-color 0.3s;
}

.radio-button input[type='radio']:checked + label .color-box {
  border-color: var(--accent);
}
</style>
