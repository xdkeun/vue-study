<template>
  <h4>Vue로 만드는 Todo List</h4>
  <TodoAdd @add-todo="handleAddTodo"/>
  <TodoList :todos="todos" />
</template>

<script setup>
import TodoAdd from "@/components/TodoAdd.vue"
import TodoList from '@/components/TodoList.vue';

import { ref } from "vue"

const todos = ref([]);
const handleAddTodo = (todo) => {
  todos.value.push(todo);
};
</script>
