<!-- TodoAdd.vue -->
<template>
  <div>
    <input type="text" placeholder="할 일을 추가하세요" v-model="addContent">
    <button @click="addTodo">ADD</button>
  </div>
  <p v-if="warning">할 일을 입력하고 추가하세요</p>
</template>

<script setup>
import { ref, defineEmits, watch } from 'vue';

const emit = defineEmits([]);

const addContent = ref("");
const warning = ref(false);

const addTodo = () => {
  if (addContent.value.length === 0) {
    warning.value = true;
    return;
  }
  warning.value = false;
  emit('add-todo', addContent.value);
  addContent.value = ""
};

// addContent 값이 변경될 때마다 로직을 수행
watch(addContent, (newValue, oldValue) => {
  console.log('addContent의 값이', oldValue, '에서', newValue, '로 변했습니다');
});
</script>
