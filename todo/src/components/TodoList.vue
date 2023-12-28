<template>
  <div>
    <article v-for="(todo, index) in props.todos" :key="index">
      {{ todo }}
    </article>
  </div>
</template>

<script setup>
//props를 받아옵니다
import { defineProps } from 'vue';
const props = defineProps(["todos"])
</script>