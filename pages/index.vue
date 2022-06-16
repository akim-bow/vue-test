<template>
  <v-container fluid class="flex-grow-1 h-100">
    <Dialog :open="Boolean(selectedCard)" @close="selectedCard = undefined">
      <v-card-title>
        <EditableInput class="w-100" v-model="selectedCard.title"></EditableInput>
      </v-card-title>
      <v-card-subtitle>{{ selectedCard.name }} at {{ selectedCard.createdAt.toLocaleString() }}</v-card-subtitle>
      <v-card-subtitle>Column: {{ selectedCard.column }}</v-card-subtitle>
      <v-card-content>
        <textarea class="w-100 card-dialog-textarea" v-model="selectedCard.description" placeholder="Put description here"></textarea>
      </v-card-content>
    </Dialog>
    <div class="card-container" @test="log">
      <v-card class="column" v-for="(column, columnIndex) in columns">
        <v-card-header class="px-1">
          <div class="text-h6">
            <EditableInput class="w-100" v-model="column.header"></EditableInput>
          </div>
          <v-icon class="card-close-icon" @click.stop="columns.splice(columnIndex, 1)">mdi-close</v-icon>
        </v-card-header>
        <Card
            class="item"
            v-for="(card, cardIndex) in column.cards"
            :title="card.title"
            :description="card.description"
            @click="selectedCard = {...card, column: column.header}"
            @delete="column.cards.splice(cardIndex, 1)"
        />
        <AddTextField @add="title => addCard(columnIndex, title)" title="Add a card" />
      </v-card>
      <div class="editable-wrapper">
        <AddTextField @add="addColumn" title="Add a column" />
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
interface Card {
  name: string;
  title: string;
  description: string;
  createdAt: Date;
}

interface Column {
  header: string;
  cards: Card[];
}

type SelectedCard = Card & {column: string};

import Card from "../components/Card.vue";
import AddTextField from "../components/AddTextField.vue";
import Dialog from "../components/Dialog.vue";
import EditableInput from "../components/EditableInput.vue";

import { ref, reactive, onMounted } from "vue";

const log = (text = 'test') => console.log(text);

const name = ref('');
const columns = reactive<Column[]>([
  {header: "To Do", cards: []},
  {header: "Doing", cards: []},
  {header: "Done", cards: []},
]);
const selectedCard = ref<SelectedCard>(undefined);

const addCard = (index: number, title: string) => {
  columns[index].cards.push({name: name.value, title, description: '', createdAt: new Date()});
};

const addColumn = (title: string) => {
  columns.push({header: title, cards: []});
};

onMounted(() => {
  name.value = prompt('Enter your name', 'Developer');
});

</script>

<style scoped>

.card-container {
  height: 100%;
  white-space: nowrap;
  overflow-x: scroll;
}

.column {
  width: 260px;
  display: inline-block;
  background-color: #ebecf0;
  margin: 0 4px;
  padding: 8px;
  vertical-align: top;
}

.editable-wrapper {
  display: inline-block;
  margin: 0 4px;
  padding: 8px;
  background-color: #ebecf0;
}


.item {
  margin-bottom: 8px;
}

.card-dialog-textarea {
  resize: none;
}

</style>
