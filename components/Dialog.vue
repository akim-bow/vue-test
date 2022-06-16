<template>
  <!-- v-if because Vuetify dialog throws warning when ssr happens -->
  <v-dialog
      v-if="open"
      :model-value="open"
  >
    <v-card>
      <slot/>
      <v-card-actions>
        <v-btn color="primary" block @click="onClose">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
interface Props {
  open: boolean;
}

interface Emits {
  (e: 'close'): void;
}

const {open} = defineProps<Props>();
const emit = defineEmits<Emits>();

const onClose = () => emit('close');

</script>

<style scoped>

</style>
