
<template>
  <main>
    <section>
      <h4>Vue로 만드는 Todo List</h4>
      <TodoAdd :propsValue="propsValue" :secondPropsValue="secondPropsValue"/>
      <TodoList />
    </section>
  </main>
</template>

<script setup>
import TodoAdd from "@/components/TodoAdd.vue"
import TodoList from '@/components/TodoList.vue';

// props 값을 TodoAdd에 넘겨주겠습니다
import {ref} from "vue"
const propsValue = ref("props value 입니다 ^^")
const secondPropsValue = ref("2번째 props")
</script>