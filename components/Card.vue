<template>
  <v-card class="card pa-2 rounded">
    <v-card-header class="pa-1">
      <span class="card-name flex-grow-1">{{title}}</span>
      <v-icon class="card-close-icon" @click.stop="emit('delete')">mdi-close</v-icon>
    </v-card-header>
    <div v-if="Boolean(description)" class="card-actions pl-3">
      <v-icon>mdi-message-text</v-icon>
    </div>
  </v-card>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

interface Emits {
  (e: 'delete'): void;
}

const {title, description} = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<style scoped>
.card-name {
  cursor: pointer;
}

.card-actions {

}

.card-close-icon {
  transition: transform .2s linear;
}

.card-close-icon:hover {
  transform: scale(1.1);
}
</style>
