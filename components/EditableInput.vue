<template>
  <input type="text" :value="modelValue" @input="emit('update:modelValue', $event.target.value)">
</template>

<script setup lang="ts">
  const {modelValue} = defineProps<{modelValue: string}>();
  const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>();
</script>
