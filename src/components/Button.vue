<template>
  <RouterLink :to="to">
    <button :class="className" :disabled="disabled">{{ label }}</button>
  </RouterLink>
</template>

<script>
export default {
  name: 'Button',
  props: {
    to: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Далее'
    },
    className: {
      type: String,
      default: 'btn-accent'
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
button {
  width: 189px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--third-family);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text);
  border: none;
  border-radius: 20px;
  margin: 0 auto;
}

.btn-accent {
  background-color: var(--accent);
}

.btn-secondary {
  background-color: transparent;
  color: var(--white);
  border: 1px solid var(--white);
}

button:disabled {
  background-color: var(--bg-disabled);
  color: var(--gray);
  box-shadow: inset 0 4px 10px 0 rgba(0, 0, 0, 0.25);
}
</style>
