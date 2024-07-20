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
      <span class="color-box"></span>
      {{ value }}
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
  height: 42px;
  width: 41px;
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 245%;
  text-transform: capitalize;
  color: var(--bg-test);
  background-color: var(--white);
  border-width: 6px;
  border-color: transparent;
  border-style: solid;
  transition: border-color 0.3s;
  z-index: 1;
}

.radio-button input[type='radio']:checked + label {
  border-color: var(--accent);
}
</style>
