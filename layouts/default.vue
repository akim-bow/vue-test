<template>
  <v-layout class="h-100 flex-column">
    <v-toolbar color="grey-lighten-2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Nuxt trello</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>

    </v-toolbar>

    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);
</script>
