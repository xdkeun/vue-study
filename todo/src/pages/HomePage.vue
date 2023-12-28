
<template>
  <main>
    <section>
      <h4>Vue로 만드는 Todo List</h4>
      <TodoAdd />
      <TodoList />
    </section>
  </main>
</template>

<script setup>
import TodoAdd from "@/components/TodoAdd.vue"
import TodoList from '@/components/TodoList.vue';
</script>