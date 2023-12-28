<template>
  <h4>Vue로 만드는 Todo List</h4>
  <TodoAdd @add-todo="handleAddTodo" />
  <TodoList :todos="todos" @update-todo="handleUpdateTodo" @delete-todo="handleDeleteTodo" />
</template>

<script setup>
import TodoAdd from "@/components/TodoAdd.vue"
import TodoList from '@/components/TodoList.vue';

import { ref } from "vue"

const todos = ref([]);
const handleAddTodo = (todo) => {
  const newTodo = {
    id: Date.now(), // 간단하게 현재 시간을 id로 사용
    content: todo,
  };
  todos.value.push(newTodo);
};

const handleUpdateTodo = (updatedTodo) => {
  const index = todos.value.findIndex((todo) => todo.id === updatedTodo.id);
  if (index !== -1) {
    // 해당 인덱스의 todo를 업데이트
    todos.value[index].content = updatedTodo.content;
  }
};

const handleDeleteTodo = (id) => {
  // 해당 id와 일치하는 todo 삭제
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

</script>
