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
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.radio-button::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-radio);
  opacity: 0.15;
  z-index: 0;
}

label {
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  text-align: left;
  position: relative;
  font-size: 18px;
  line-height: 111%;
  letter-spacing: 0.05em;
  padding: 15px 0 15px 25px;
  z-index: 1;
}

.radio-button input[type='radio'] {
  position: relative;
  margin-right: 60px;
  appearance: none;
  cursor: pointer;
}

.radio-button input::before {
  position: absolute;
  content: url('@/assets/ellipse.svg');
  left: 25px;
  top: 50%;
  transform: translateY(-47%);
  z-index: 5;
}

input:checked::before {
  content: url('@/assets/ellipse_blue.svg');
}

input[type='radio']:checked + label {
  color: var(--text);
}

.radio-button input[type='radio']:checked + label::after {
  content: '';
  position: absolute;
  top: 0;
  left: -60px;
  right: 0;
  height: 100%;
  background-color: var(--accent);
  opacity: 1;
  z-index: -1;
}
</style>
