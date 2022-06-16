<template>
  <v-sheet rounded class="w-100 pa-2 d-flex flex-column">
    <input
        type="text"
        class="editable-input"
        :value="active ? value : title"
        @input="value = $event.target.value"
        @focusin="onFocusIn"
        v-click-outside="onFocusOut"
    >
    <v-btn class="mt-2" v-show="active">{{title}}</v-btn>
  </v-sheet>

</template>

<script setup lang="ts">
interface Props {
  title: string;
}

interface Emits {
  (e: 'add', text: string): void;
}

import { ref, computed } from 'vue';
import ClickOutside from '../node_modules/vuetify/lib/directives/click-outside';

const {title} = defineProps<Props>();

const emit = defineEmits<Emits>();

const active = ref(false);

const value = ref('');

const onFocusIn = () => {
  active.value = true;
  value.value = '';
};

const onFocusOut = () => {
  active.value = false;
  if (value.value) {
    emit('add', value.value);
    value.value = '';
  }
};

</script>

<style scoped>
.editable-input {
  background: transparent;
  padding: 4px;
}

.editable-input:focus {
  background-color: #fafbfc;
}

.editable-input:not(:focus):hover {
  background-color: #f4f5f7;
  cursor: pointer;
}
</style>
