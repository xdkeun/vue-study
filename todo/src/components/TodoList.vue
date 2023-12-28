<template>
  <div>
    <article v-for="todo in todos" :key="todo.id">
      {{ todo.content }}
    </article>
    <div v-if="loading">loading ...</div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

const todos = ref([]);
const loading = ref(true)

onBeforeMount(async () => {
  try {
    const response = await axios.get('http://localhost:4000/todos');
    todos.value = response.data;
  } catch (error) {
    console.error('List Error:', error);
  } finally {
    loading.value = false;
  }
});
</script>